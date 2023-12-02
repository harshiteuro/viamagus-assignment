// src/teams/team.controller.ts
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TeamsService } from './team.service';
import { BearerAuthGuard } from '../auth/bearer-auth.guard';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get('/get-all-teams')
  @UseGuards(BearerAuthGuard) 
  getAllTeams() {
    return this.teamsService.getAllTeams();
  }

  @Post('/create-team')
  @UseGuards(BearerAuthGuard) 
  createTeam(@Body() createTeamDto: any) {
    return this.teamsService.createTeam(createTeamDto);
  }
}
