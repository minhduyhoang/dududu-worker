import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { MessageModule } from 'src/message/message.module';

@Module({
  imports: [MessageModule],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
