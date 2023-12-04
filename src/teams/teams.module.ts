import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { TeamsController } from './team.controller';
import { TeamsService } from './team.service';
import { ConfigService } from '@nestjs/config';
import { TeamMember } from './team-member.entity';
import { TeamMembersController } from './team-members.controller';
import { TeamMembersService } from './team-members.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/auth/auth.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Team]),JwtModule,JwtModule.register({
    secret: 'hello', // Set your secret key here
    signOptions: { expiresIn: '1h' }, // Adjust expiration as needed
  }),],
  controllers: [TeamsController,AuthController],
  providers: [TeamsService,ConfigService],
})
export class TeamsModule {}