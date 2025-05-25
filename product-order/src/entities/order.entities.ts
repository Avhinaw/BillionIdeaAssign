import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Product } from './product.entities';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  customerId: number;

  @Column()
  quantity: number;

  @Column('decimal')
  totalPrice: number;
}
