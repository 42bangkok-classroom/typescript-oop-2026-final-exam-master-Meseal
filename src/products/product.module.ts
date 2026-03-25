import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
