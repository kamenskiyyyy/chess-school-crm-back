import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildrenModule } from './children/children.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ChildrenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
