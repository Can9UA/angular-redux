import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsTimeModule } from './persons-time/persons-time.module';
import { PeopleFilterModule } from './people-filter/people-filter.module';

import { StoreModule } from '@ngrx/store';

import { clock, people } from './persons-time/state-management/reducers';

import { people_f } from './people-filter/reducers/people_f';
import { filter_f } from './people-filter/reducers/filter_f';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PersonsTimeModule,
    PeopleFilterModule,
    StoreModule.provideStore({ // TODO how to add new store values if it already exist via provideStore
      // example 1
      people,
      clock,
      //example 2
      people_f,
      filter_f
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
