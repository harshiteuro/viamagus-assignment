// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { TeamsModule } from './teams/teams.module';
import { ConfigModule } from '@nestjs/config'; 

import { TeamMembersModule } from './teams/team-members.module';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'changemeplease',
      database: 'viamagus_assignment',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      dropSchema:true }),
    TasksModule,
    TeamsModule,
    TeamMembersModule,
  ],
  providers:[]
})
export class AppModule {}
