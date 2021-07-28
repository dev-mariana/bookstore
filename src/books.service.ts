import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  books: Book[] = [
    // new Book('LIV01', 'TypeScript Book', 29.9),
    // new Book('LIV02', 'Java Book', 38.9),
    // new Book('LIV03', 'Angular Book', 25.0),
  ];

  getAll(): Book[] {
    return this.books;
  }

  getById(id: number): Book {
    return this.books[0];
  }

  create(book: Book): void {
    this.books.push(book);
  }

  change(book: Book): Book {
    return book;
  }

  delete(id: number): void {
    this.books.pop();
  }
}
