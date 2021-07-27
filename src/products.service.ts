import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    new Product('LIV01', 'TypeScript Book', 29.9),
    new Product('LIV02', 'Java Book', 38.9),
    new Product('LIV03', 'Angular Book', 25.0),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product {
    return this.products[0];
  }

  create(product: Product): void {
    this.products.push(product);
  }

  change(product: Product): Product {
    return product;
  }

  delete(id: number): void {
    this.products.pop();
  }
}
