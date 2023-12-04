import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TeamMember } from '../teams/team-member.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  due_date: Date;

  @ManyToOne(() => TeamMember, teamMember => teamMember.id, { nullable: true })
  assignee: TeamMember;

  @Column()
  status: string;
}
