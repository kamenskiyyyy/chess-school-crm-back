import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'children' })
export class ChildrenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  secondName: string;

  @Column()
  patronymic: string;

  @Column()
  birthDate: Date;

  @Column()
  status: boolean;

  @Column()
  adress: string;

  @Column()
  commentaries: string;

  @ManyToOne(() => UserEntity, (user) => user.children, { eager: true })
  parent: UserEntity;
}
