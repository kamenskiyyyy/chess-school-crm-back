import { Body, Controller, Post, Query, UseGuards } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { AuthGuard } from '../user/guards/auth.guard';
import { RoleAdminGuard } from '../user/guards/roleAdmin.guard';
import { CreateLessonDto } from './dto/createLesson.dto';
import { LessonEntity } from './lesson.entity';

@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseGuards(RoleAdminGuard)
  async createLesson(
    @Query('coachId') coachId: number,
    @Body() createLessonDto: CreateLessonDto,
  ): Promise<LessonEntity> {
    return await this.lessonService.createLesson(coachId, createLessonDto);
  }
}
