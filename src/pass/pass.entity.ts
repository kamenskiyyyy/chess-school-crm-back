import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChildrenEntity } from '../children/children.entity';

@Entity({ name: 'pass' })
export class PassEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => ChildrenEntity, (children) => children.pass)
  @JoinColumn()
  children: ChildrenEntity;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  saleDate: Date;

  @Column({ default: 0 })
  paidAmount: number;

  @Column({ default: 1 })
  passType: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  startDate: Date;

  @Column({ default: null })
  endData: Date;

  @Column({ default: true })
  office: boolean;

  @Column({ default: null })
  receiver: string;

  @Column({ default: 'card' })
  method: string;

  @Column({ default: null })
  comment: string;
}
