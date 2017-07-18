import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsTimeComponent } from './persons-time.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClockComponent,
    PersonsTimeComponent
  ],
  exports: [
    PersonsTimeComponent
  ]
})
export class PersonsTimeModule { }
