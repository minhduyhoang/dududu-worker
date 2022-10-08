import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MessageService {
  constructor(@Inject('API_SERVICE') private client: ClientProxy) {}

  test(time: string) {
    this.client.emit('test', { time });
  }
}
