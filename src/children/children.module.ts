import { Module } from '@nestjs/common';
import { ChildrenController } from './children.controller';
import { ChildrenService } from './children.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildrenEntity } from './children.entity';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';
import { AuthGuard } from '../user/guards/auth.guard';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([ChildrenEntity, UserEntity])],
  controllers: [ChildrenController],
  providers: [ChildrenService, UserService, AuthGuard, ConfigService],
})
export class ChildrenModule {}
