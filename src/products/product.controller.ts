import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly missionService: ProductService) {}

  @Get()
  findAll() {
    return this.missionService.findAll();
  }
}
