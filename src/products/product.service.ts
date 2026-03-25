import { Injectable } from '@nestjs/common';
import { Iproduct } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  private readonly filePath = path.join(process.cwd(), 'data', 'products.json');

  private readDatabase(): Iproduct[] {
    try {
      const rawData = fs.readFileSync(this.filePath, 'utf8');
      const parsedData = JSON.parse(rawData) as unknown;
      return parsedData as Iproduct[];
    } catch {
      return [];
    }
  }
  test(): never[] {
    return [];
  }

  findAll(): Iproduct[] {
    return this.readDatabase();
  }
}
