import { Module } from '@nestjs/common';
import { PassController } from './pass.controller';
import { PassService } from './pass.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassEntity } from './pass.entity';
import { ChildrenEntity } from '../children/children.entity';
import { AuthGuard } from '../user/guards/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([PassEntity, ChildrenEntity])],
  controllers: [PassController],
  providers: [PassService, AuthGuard],
})
export class PassModule {}
