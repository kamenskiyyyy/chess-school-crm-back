import { Module } from '@nestjs/common';
import { ChildrenController } from './children.controller';
import { ChildrenService } from './children.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildrenEntity } from './children.entity';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChildrenEntity, UserEntity])],
  controllers: [ChildrenController],
  providers: [ChildrenService, UserService],
})
export class ChildrenModule {}
