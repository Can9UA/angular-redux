import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { SearchComponent } from './search/search.component';
import { BooksService } from './books.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(reducers)
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
