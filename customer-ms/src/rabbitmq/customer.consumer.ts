import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class CustomerConsumer {
  @EventPattern('customer_order_placed')
  handleOrderPlaced(@Payload() data: any) {
    console.log('📬 [customer-ms] Received order event from product-order-ms:', data);
    // You can add logic to store this if needed
  }
}