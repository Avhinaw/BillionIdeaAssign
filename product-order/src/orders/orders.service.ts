import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entities';
import { customerClient } from '../rabbitmq/client';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
  ) {}

  async create(order: Partial<Order>) {
    const newOrder = this.orderRepo.create(order);
    const savedOrder = await this.orderRepo.save(newOrder);

    // Emit order event to customer-ms
    customerClient.emit('customer_order_placed', {
      orderId: savedOrder.id,
      customerId: savedOrder.customerId,
      productId: savedOrder.productId,
      totalPrice: savedOrder.totalPrice,
    });

    return savedOrder;
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: number) {
    return this.orderRepo.findOne({ where: { id } });
  }
}
