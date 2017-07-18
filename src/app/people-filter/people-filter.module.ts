import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFilterComponent } from './people-filter.component';
import { FilterSelectComponent } from './components/filter-select';
import { PersonInputComponent } from './components/person-input';
import { PersonListComponent } from './components/person-list';
import { StoreModule } from '@ngrx/store'
import { filter } from './reducers/filter';
import { people_f } from './reducers/people_f';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [PeopleFilterComponent, FilterSelectComponent, PersonInputComponent, PersonListComponent],
  exports: [PeopleFilterComponent]
})
export class PeopleFilterModule {
}
