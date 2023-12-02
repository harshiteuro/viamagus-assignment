import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { TeamsController } from './team.controller';
import { TeamsService } from './team.service';
import { AuthService } from '../auth/auth.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  controllers: [TeamsController],
  providers: [TeamsService,AuthService,ConfigService],
})
export class TeamsModule {}