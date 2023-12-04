import { Entity, Column, PrimaryGeneratedColumn, OneToMany ,ManyToOne} from 'typeorm';
import { Task } from '../tasks/task.entity';
import { Team } from './team.entity';

@Entity()
export class TeamMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Team, team => team.id)
  team: Team;

}
