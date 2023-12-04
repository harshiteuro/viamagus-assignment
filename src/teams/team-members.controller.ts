// team-members.controller.ts
import { Controller, Post, Body,UseGuards } from '@nestjs/common';
import { TeamMembersService } from './team-members.service';
import { BearerAuthGuard } from '../auth/bearer-auth.guard';

@Controller('team-members')
export class TeamMembersController {
  constructor(private readonly teamMembersService: TeamMembersService) {}

  @Post('/add-member')
  @UseGuards(BearerAuthGuard) 
  addTeamMember(@Body() createTeamDto: any ) {
    return this.teamMembersService.addTeamMember(createTeamDto);
  }
}
