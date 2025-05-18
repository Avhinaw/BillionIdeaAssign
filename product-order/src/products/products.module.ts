import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from '../entities/product.entities'; // Adjust path if needed

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // ✅ This is mandatory
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
