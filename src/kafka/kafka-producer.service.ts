import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaProducerService {
  constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('order-check');
    await this.kafkaClient.connect();
  }

  sendMessage(message: any) {
    this.kafkaClient.emit('order-check', message);
  }
}