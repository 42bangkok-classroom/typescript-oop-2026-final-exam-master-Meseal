import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Iproduct } from './product.interface';

@Controller('product')
export class ProductController {
  constructor(private readonly missionService: ProductService) {}

  @Get()
  findAll() {
    return this.missionService.findAll();
  }
}
