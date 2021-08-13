import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/createLesson.dto';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private readonly lessonRepository: Repository<LessonEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createLesson(
    coachId: number,
    createLessonDto: CreateLessonDto,
  ): Promise<LessonEntity> {
    const newLesson = new LessonEntity();
    const coach = await this.userRepository.findOne(coachId);
    if (!coach || coach.type !== 'coach') {
      throw new HttpException(
        'Тренера с таким id не существует',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    Object.assign(newLesson, createLessonDto);
    newLesson.coach = coach;
    return await this.lessonRepository.save(newLesson);
  }
}
