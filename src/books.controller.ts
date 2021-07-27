import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

  constructor(private booksService: BooksService) {

  }

  @Get()
  getAll(): Book[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Book {
    return this.booksService.getById(params.id);
  }

  @Post()
  create(@Body() book: Book): void {
    this.booksService.create(book);
  }

  @Put()
  change(@Body() book: Book): Book {
    return this.booksService.change(book);
  }

  @Delete(':id')
  delete(@Param() params): void {
    this.booksService.delete(params.id);
  }
}
