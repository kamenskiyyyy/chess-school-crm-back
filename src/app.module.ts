import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildrenModule } from './children/children.module';
import { AuthMiddleware } from './user/middlewares/auth.middleware';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ChildrenModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
