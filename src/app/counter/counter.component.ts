import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';

@Component({
  selector: 'counter',
  template: `<h4>Count: {{count | async}}</h4>`
})
export class CounterComponent {
  count: Observable<number>;

  constructor(private store: Store<fromRoot.State>) {
    // this.count = store.select(state => state.search.results.length);
    // ovariant 2
    this.count = store.select(state => fromRoot.selectCount(state));
  }
}
