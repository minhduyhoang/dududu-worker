import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as moment from 'moment-timezone';
import { MessageService } from 'src/message/message.service';

@Injectable()
export class TaskService {
  constructor(private messageService: MessageService) {}

  @Cron(CronExpression.EVERY_HOUR)
  async runEveryHour() {
    const time = moment(Date.now()).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');

    console.log(`CRON JOB RUN EVERY_HOUR AT: ${time}`);

    this.messageService.test(time);
  }
}
