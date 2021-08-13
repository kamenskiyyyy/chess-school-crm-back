import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonChildrenEntity } from './lessonChildren.entity';
import { Repository } from 'typeorm';
import { LessonEntity } from '../lesson/lesson.entity';
import { ChildrenEntity } from '../children/children.entity';
import { CreateLessonChildrenDto } from './dto/createLessonChildren.dto';

@Injectable()
export class LessonChildrenService {
  constructor(
    @InjectRepository(LessonChildrenEntity)
    private readonly lessonChildrenRepository: Repository<LessonChildrenEntity>,
    @InjectRepository(LessonEntity)
    private readonly lessonRepository: Repository<LessonEntity>,
    @InjectRepository(ChildrenEntity)
    private readonly childrenRepository: Repository<ChildrenEntity>,
  ) {}

  async createLessonChildren(
    lessonId: number,
    childrenId: number,
    createLessonChildrenDto: CreateLessonChildrenDto,
  ): Promise<LessonChildrenEntity> {
    const lesson = await this.lessonRepository.findOne(lessonId);
    if (!lesson) {
      throw new HttpException(
        'Урока с таким id не существует',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const children = await this.childrenRepository.findOne(childrenId);
    if (!children) {
      throw new HttpException(
        'Ребенка с таким id не существует',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newLessonChildren = new LessonChildrenEntity();
    Object.assign(newLessonChildren, createLessonChildrenDto);
    newLessonChildren.children = children;
    newLessonChildren.lesson = lesson;
    return await this.lessonChildrenRepository.save(newLessonChildren);
  }
}
