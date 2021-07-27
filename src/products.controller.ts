import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {

  }

  @Get()
  getAll(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Product {
    return this.productsService.getById(params.id);
  }

  @Post()
  create(@Body() product: Product): void {
    this.productsService.create(product);
  }

  @Put()
  change(@Body() product: Product): Product {
    return this.productsService.change(product);
  }

  @Delete(':id')
  delete(@Param() params): void {
    this.productsService.delete(params.id);
  }
}
