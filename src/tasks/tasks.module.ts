import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';
import { AuthService } from '../auth/auth.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService,AuthService,ConfigService],
})
export class TasksModule {}