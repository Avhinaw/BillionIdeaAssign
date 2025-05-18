import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../entities/product.entities';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  create(@Body() product: Partial<Product>) {
    return this.productService.create(product);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
}
