import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  providers: [
    {
      provide: 'API_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get('RABBIT_HOST')],
            queue: configService.get('RABBIT_QUEUE'),
            noAck: false,
            queueOptions: {
              durable: true,
            },
          },
        });
      },
      inject: [ConfigService],
    },
    MessageService,
    ConfigService,
  ],
  exports: [MessageService],
})
export class MessageModule {}
