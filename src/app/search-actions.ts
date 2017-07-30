import { Action } from '@ngrx/store';
import { Book } from './book-model';

export const SEARCH = '[Books] Search';
export const SEARCH_SUCCESS = '[Books] Search Success';

export class SearchAction implements Action {
  type = SEARCH;

  constructor(public payload: string) {}
}

export class SearchSuccessAction implements Action {
  type = SEARCH_SUCCESS;

  constructor(public payload: Book[]) {}
}

export type All = SearchAction | SearchSuccessAction;
