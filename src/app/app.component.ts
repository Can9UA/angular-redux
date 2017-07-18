import { Component } from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store'
import {
  HOUR,
  SECOND,
  ADVANCE,
  RECALL
} from './state-management/reducers/reducers';
import 'rxjs/add/operator/withLatestFrom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  time: any;
  people: any;

  click$$: any = new Subject()
    .map((inpValue) => {
      return {
        type: HOUR,
        payload: parseInt(inpValue as string, 10)
      };
    });

  seconds$ = Observable.interval(1000)
    .mapTo({ type: SECOND, payload: 1 });

  person$$ = new Subject().map((person) => {
    return {
      type: ADVANCE,
      payload: person
    };
  })

  recall$$ = new Subject();

  constructor(store: Store<any>) {
    this.time = store.select('clock');
    this.people = store.select('people');

    Observable.merge(
      this.click$$,
      this.seconds$,
      this.person$$,
      this.recall$$.withLatestFrom(this.time, (x, y) => y)
        .map((time) => {
          return {
            type: RECALL,
            payload: time
          };
        })
    )
      // .subscribe((action) => { store.dispatch(action as any) });
      .subscribe(store.dispatch.bind(store));
  }
}
