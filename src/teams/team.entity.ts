import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TeamMember } from './team-member.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  team_name: string;

}
