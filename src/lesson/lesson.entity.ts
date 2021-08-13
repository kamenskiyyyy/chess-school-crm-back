import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { Type } from 'class-transformer';
import { LessonChildrenEntity } from '../lessonChildren/lessonChildren.entity';

@Entity({ name: 'lessons' })
export class LessonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Type(() => Date)
  @Column()
  lessonTime: Date;

  @Column()
  lessonLocation: string;

  @ManyToOne(() => UserEntity, (user) => user.lessons)
  coach: UserEntity;

  @OneToMany(
    () => LessonChildrenEntity,
    (lessonChildren) => lessonChildren.lesson,
  )
  @JoinColumn()
  lessonChildren: LessonChildrenEntity[];
}
