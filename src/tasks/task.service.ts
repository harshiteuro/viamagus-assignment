// src/tasks/task.service.ts
import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { getRepository } from 'typeorm';
import { TeamMember } from '../teams/team-member.entity';


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
    @InjectRepository(TeamMember)
    private teamMemberRepository: Repository<TeamMember>,
  ) {}

  getAllTasks() {
    return this.tasksRepository.find({ relations: ['assignee'] });
  }

  createTask(task: Task) {
    return this.tasksRepository.save(task);
  }

  updateTaskStatus(id: number, status: string) {
    return this.tasksRepository.update(id, { status });
  }

  async assignTaskToMember(taskId: number, assignee: number): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id: taskId } });
  
    if (!task) {
      throw new NotFoundException(`Task with ID ${taskId} not found`);
    }
  
    // Assign the TeamMember entity to the task's assignee
    console.log(assignee);
    task.id = assignee;
  
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
