import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { MessageModule } from './message/message.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ScheduleModule.forRoot(), TaskModule, MessageModule],
})
export class WorkerModule {}
