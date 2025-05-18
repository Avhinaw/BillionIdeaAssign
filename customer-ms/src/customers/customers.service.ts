import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entities';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}

  create(customer: Partial<Customer>) {
    return this.customerRepo.save(customer);
  }

  findAll() {
    return this.customerRepo.find();
  }

  findOne(id: number) {
    return this.customerRepo.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<Customer>) {
    await this.customerRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const customer = await this.findOne(id);
    if (!customer) {
      throw new Error(`Customer with id ${id} not found`);
    }
    return this.customerRepo.remove(customer);
  }
  
}
