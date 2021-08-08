import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

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

  @Column({ default: false })
  status: boolean;

  @Column({ default: null })
  adress: string;

  @Column({ default: null })
  commentaries: string;

  @ManyToOne(() => UserEntity, (user) => user.children, { eager: true })
  parent: UserEntity;
}
