// src/tasks/task.controller.ts
import { Controller, Get, Post, Body, Param, Patch, UseGuards } from '@nestjs/common';
import { TasksService } from './task.service';
import { BearerAuthGuard } from '../auth/bearer-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/get-all-tasks')
  @UseGuards(BearerAuthGuard) 
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post('/create-task')
  @UseGuards(BearerAuthGuard) 
  createTask(@Body() createTaskDto: any) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  @UseGuards(BearerAuthGuard) 
  updateTaskStatus(@Param('id') id: number, @Body('status') status: string) {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Patch('/:id/assign')
  @UseGuards(BearerAuthGuard) 
  assignTaskToMember(@Param('id') id: number, @Body('assignee') assignee: number) {
    return this.tasksService.assignTaskToMember(id, assignee);
  }

  @Patch('/:id/update-properties')
  @UseGuards(BearerAuthGuard) 
  updateTaskProperties(@Param('id') id: number, @Body('description') description: string, @Body('due_date') due_date: Date ) {
    return this.tasksService.updateTaskProperties(id, description,due_date);
  }
}
