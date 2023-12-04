import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';
import { TeamMember } from 'src/teams/team-member.entity';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Task,TeamMember]),JwtModule,JwtModule.register({
    secret: 'hello', // Set your secret key here
    signOptions: { expiresIn: '1h' }, // Adjust expiration as needed
  }),],
  controllers: [TasksController],
  providers: [TasksService,ConfigService],
})
export class TasksModule {}