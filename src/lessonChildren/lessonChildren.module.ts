import { Module } from '@nestjs/common';
import { LessonChildrenController } from './lessonChildren.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from '../lesson/lesson.entity';
import { LessonChildrenEntity } from './lessonChildren.entity';
import { ChildrenEntity } from '../children/children.entity';
import { AuthGuard } from '../user/guards/auth.guard';
import { UserEntity } from '../user/user.entity';
import { LessonChildrenService } from './lessonChildren.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LessonChildrenEntity,
      LessonEntity,
      ChildrenEntity,
      UserEntity,
    ]),
  ],
  controllers: [LessonChildrenController],
  providers: [LessonChildrenService, AuthGuard],
})
export class LessonChildrenModule {}
