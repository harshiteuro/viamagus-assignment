// src/tasks/task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  due_date: Date;

  @Column()
  assignee: string;

  @Column()
  status: string;
}
