import { Body, Controller, Post, Query, UseGuards } from '@nestjs/common';
import { LessonChildrenService } from './lessonChildren.service';
import { AuthGuard } from '../user/guards/auth.guard';
import { RoleCoachGuard } from '../user/guards/roleCoach.guard';
import { CreateLessonChildrenDto } from './dto/createLessonChildren.dto';
import { LessonChildrenEntity } from './lessonChildren.entity';

@Controller('lessonsChildren')
export class LessonChildrenController {
  constructor(private readonly lessonChildrenService: LessonChildrenService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseGuards(RoleCoachGuard)
  async createLessonChildren(
    @Query('lessonId') lessonId: number,
    @Query('childrenId') childrenId: number,
    @Body() createLessonChildrenDto: CreateLessonChildrenDto,
  ): Promise<LessonChildrenEntity> {
    return this.lessonChildrenService.createLessonChildren(
      lessonId,
      childrenId,
      createLessonChildrenDto,
    );
  }
}
