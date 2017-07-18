import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsTimeModule } from './persons-time/persons-time.module';
import { PeopleFilterModule } from './people-filter/people-filter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PersonsTimeModule,
    PeopleFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
