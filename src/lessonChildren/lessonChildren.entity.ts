import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LessonEntity } from '../lesson/lesson.entity';
import { ChildrenEntity } from '../children/children.entity';

@Entity({ name: 'lessonsChildren' })
export class LessonChildrenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => LessonEntity, (lesson) => lesson.lessonChildren)
  lesson: LessonEntity;

  @ManyToOne(() => ChildrenEntity, (children) => children.lessons)
  children: ChildrenEntity;

  @Column({ default: false })
  visited: boolean;

  @Column({ default: null })
  coachComment: string;
}
