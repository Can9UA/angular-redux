import { Injectable } from '@angular/core';
import { Book } from './book-model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const terms: string[] = ['Term 0', 'Term 1'];
export const books: Book[] = generateBooks(6);

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return Observable.of(books);
  }

  getTerms() {
    return Observable.of(terms);
  }

  searchBooks(term: string) {
    const filteredBooks = books.filter((book) => book.term === term);
    return Observable.of(filteredBooks);
  }
}

// ---
function generateBooks(amount: number): Book[] {
  const books: Book[] = [];

  for (let i = 0, len = amount; i < len; i++) {
    books.push({
      id: i.toString(),
      name: `Book ${i}`,
      term: `Term ${i % 2}`
    });
  }

  return books;
}
