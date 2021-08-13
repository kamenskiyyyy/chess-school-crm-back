import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { PassEntity } from '../pass/pass.entity';
import { LessonChildrenEntity } from '../lessonChildren/lessonChildren.entity';

@Entity({ name: 'children' })
export class ChildrenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  firstName: string;

  @Column({ default: null })
  secondName: string;

  @Column({ default: null })
  patronymic: string;

  @Column()
  birthDate: Date;

  @Column({ default: 'active' })
  status: string;

  @Column({ default: null })
  adress: string;

  @Column({ default: null })
  comment: string;

  @Column({ default: 0 })
  coins: number;

  @ManyToOne(() => UserEntity, (user) => user.children)
  @JoinColumn()
  parent: UserEntity;

  @OneToOne(() => PassEntity, (pass) => pass.children)
  pass: PassEntity;

  @OneToMany(
    () => LessonChildrenEntity,
    (lessonChildren) => lessonChildren.children,
  )
  lessons: LessonChildrenEntity[];
}
