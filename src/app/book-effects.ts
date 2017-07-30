import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { BooksService } from './books.service';
import * as SearchActions from './search-actions';

@Injectable()
export class BookEffects {
  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(SearchActions.SEARCH) // следить за экшеном с типом '[Books] Search'
    .map((action: SearchActions.SearchAction) => action.payload) // получим payload из этого экшена
    .switchMap(terms => this.booksService.searchBooks(terms)) // отправим запрос на получение данных
    .map(results => new SearchActions.SearchSuccessAction(results)); // при удачном завершении запроса вызовем SearchSuccessAction

  /*
  * SearchSuccessAction
  * запишет в payload книги constructor(public payload: Book[])
  * а затем мы получим их
  * store.select(fromRoot.selectResults)
  * или store.select(state => state.search.results)
  *
  * reducers = {
  *   search: fromSearch.reducer
  * };
  * */
  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) {}
}
