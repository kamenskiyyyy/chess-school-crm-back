import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { PassEntity } from '../pass/pass.entity';

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

  @ManyToOne(() => UserEntity, (user) => user.children, { eager: true })
  parent: UserEntity;

  @OneToOne(() => PassEntity, (pass) => pass)
  pass: PassEntity;
}
