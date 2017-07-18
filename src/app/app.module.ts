import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsTimeModule } from './persons-time/persons-time.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PersonsTimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
