// src/tasks/task.service.ts
import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  getAllTasks() {
    return this.tasksRepository.find();
  }

  createTask(task: Task) {
    return this.tasksRepository.save(task);
  }

  updateTaskStatus(id: number, status: string) {
    return this.tasksRepository.update(id, { status });
  }

  async assignTaskToMember(taskId: number, assignee: string): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id: taskId } });

    if (!task) {
        throw new NotFoundException(`Task with ID ${taskId} not found`);
    }
    task.assignee = assignee;
    return this.tasksRepository.save(task);
  }

  async updateTaskProperties(taskId: number, description: string, due_date:Date) {
    const task = await this.tasksRepository.findOne({ where: { id: taskId } });

    if (!task) {
      throw new NotFoundException(`Task with ID ${taskId} not found`);
    }
    task.description=description;
    task.due_date=due_date;
    return this.tasksRepository.save(task);
  }
  
}
