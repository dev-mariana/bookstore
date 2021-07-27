import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {

  products: Product[] = [
    new Product('LIV01', 'TypeScript Book', 29.90),
    new Product('LIV02', 'Java Book', 38.90),
    new Product('LIV03', 'Angular Book', 25.00)
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getById(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  create(@Body() product): void {
    product.id = 10;
    this.products.push(product);
  }

  @Put()
  change(@Body() product: Product): Product {
    return product;
  }

  @Delete(':id')
  delete(@Body() params): void {
    this.products.pop();
  }
}
