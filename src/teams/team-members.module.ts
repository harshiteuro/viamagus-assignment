// team-members.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamMember } from './team-member.entity';
import { TeamMembersService } from './team-members.service';
import { TeamMembersController } from './team-members.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [TypeOrmModule.forFeature([TeamMember]),JwtModule,JwtModule.register({
    secret: 'hello', // Set your secret key here
    signOptions: { expiresIn: '1h' }, // Adjust expiration as needed
  }),],
  providers: [TeamMembersService,ConfigService],
  controllers: [TeamMembersController],
})
export class TeamMembersModule {}
