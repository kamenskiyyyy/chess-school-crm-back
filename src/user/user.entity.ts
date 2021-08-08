import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hash } from 'bcryptjs';
import { ChildrenEntity } from '../children/children.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @Column({ default: 'user' })
  type: string;

  @Column()
  firstName: string;

  @Column()
  secondName: string;

  @Column()
  patronymic: string;

  @Column()
  birthDate: Date;

  @Column()
  phone: number;

  @Column()
  email: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToMany(() => ChildrenEntity, (children) => children.parent)
  children: ChildrenEntity[];
}
