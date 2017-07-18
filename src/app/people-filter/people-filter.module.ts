import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFilterComponent } from './people-filter.component';
import { FilterSelectComponent } from './components/filter-select';
import { PersonInputComponent } from './components/person-input';
import { PersonListComponent } from './components/person-list';
import { StoreModule } from '@ngrx/store'
import { filter_f } from './reducers/filter_f';
import { people_f } from './reducers/people_f';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({ people_f, filter_f })
  ],
  declarations: [PeopleFilterComponent, FilterSelectComponent, PersonInputComponent, PersonListComponent],
  exports: [PeopleFilterComponent]
})
export class PeopleFilterModule {
}
