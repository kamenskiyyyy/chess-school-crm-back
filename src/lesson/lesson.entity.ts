import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { Type } from 'class-transformer';

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
}
