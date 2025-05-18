import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number; // this is our primary key

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;
}
