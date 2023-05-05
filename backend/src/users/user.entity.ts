import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  names!: string;

  @CreateDateColumn()
  createdAt: string;

  @DeleteDateColumn()
  deletedAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
