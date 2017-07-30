import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as SearchActions from '../search-actions';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';
import { Book } from '../book-model';
import { BooksService } from '../books.service';

@Component({
  selector: 'search',
  template: `
    <select (change)="onSearch($event.target.value)">
      <option value="" selected>Choose your term</option>
      <option *ngFor="let termVariant of termsVariants | async"
              [value]="termVariant">
        {{termVariant}}
      </option>
    </select>
    <h3>Searched by: {{terms | async}}</h3>
    <counter></counter>
    <ul>
      <li *ngFor="let book of books | async">
        <pre>{{book| json}}</pre>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  terms: Observable<string>;
  books: Observable<Book[]>;

  termsVariants: Observable<string[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private booksService: BooksService
  ) {
    this.termsVariants = this.booksService.getTerms();

    this.terms = store.select(fromRoot.selectTerms);
    this.books = store.select(fromRoot.selectResults);
  }

  onSearch(term: string) {
    this.store.dispatch(new SearchActions.Search(term));

    this.booksService.searchBooks(term)
      .subscribe(books => {
        this.store.dispatch(new SearchActions.SearchSuccess(books));
      });
  }
}
