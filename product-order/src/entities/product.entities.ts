import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number; // this is our primary key

  @Column({ default: 'https://static.startuptalky.com/2021/06/nothing_logo_startuptalky.png' })
image: string;
  
  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;
}
