// src/teams/team.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}

  getAllTeams() {
    return this.teamsRepository.find();
  }

  createTeam(team: Team) {
    return this.teamsRepository.save(team);
  }
}
