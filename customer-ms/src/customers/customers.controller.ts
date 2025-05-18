import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from '../entities/customer.entities';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() customer: Partial<Customer>) {
    return this.customersService.create(customer);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Customer>) {
    return this.customersService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(Number(id));
  }
}
