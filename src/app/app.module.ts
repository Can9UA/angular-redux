import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';
import { SearchComponent } from './search/search.component';
import { BooksService } from './books.service';
import { CounterComponent } from './counter/counter.component';

import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './book-effects';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(BookEffects)
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
