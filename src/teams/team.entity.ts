// src/teams/team.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  team_name: string;

  @Column({ type: 'json', nullable: true })
  team_members: string[];

}
