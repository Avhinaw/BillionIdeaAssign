import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

export const customerClient: ClientProxy = ClientProxyFactory.create({
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'customer_queue',
    queueOptions: {
      durable: false,
    },
  },
});
