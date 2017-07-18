import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { people_f } from './reducers/people_f';
import { filter } from './reducers/filter';

// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/rx' // <-- TODO fix for combineLatest method

@Component({
  selector: 'people-filter',
  template: `
    <h3>Party Planner</h3>
    <filter-select (updateFilter)='updateFilter($event)'></filter-select>
    <person-input (addPerson)='addPerson($event)'></person-input>
    <person-list [people]='people_f | async'
                 (addGuest)='addGuest($event)'
                 (removeGuest)='removeGuest($event)'
                 (removePerson)='removePerson($event)'
                 (toggleAttending)='toggleAttending($event)'>
    </person-list>
  `
})
export class PeopleFilterComponent {
  people_f;
  private id = 0;

  constructor(private _store: Store<any>) {
    // this.people_f =  _store.select('people_f');

    this.people_f = Observable.combineLatest(
      _store.select('people_f'), // the same as _store.map((state) => state[people_f]).distinctUntilChanged();
      _store.select('filter'),
      (people_f: any[], filter) => {
        console.log(people_f, filter.toString());
        return people_f.filter(filter as any);
      }
    )

  }

  addPerson(name) {
    this._store.dispatch({
      type: 'ADD_PERSON', payload: {
        id: ++this.id,
        name,
        guests: 0,
        attending: false
      }
    })
  }

  addGuest({ id }) {
    this._store.dispatch({
      type: 'ADD_GUESTS',
      payload: id
    });
  }

  removeGuest({ id }) {
    this._store.dispatch({
      type: 'REMOVE_GUESTS',
      payload: id
    });
  }

  removePerson({ id }) {
    this._store.dispatch({
      type: 'REMOVE_PERSON',
      payload: id
    });
  }

  toggleAttending({ id }) {
    this._store.dispatch({
      type: 'TOGGLE_ATTENDING',
      payload: id
    });
  }

  updateFilter(filter) {
    this._store.dispatch({ type: filter });
  }
}
