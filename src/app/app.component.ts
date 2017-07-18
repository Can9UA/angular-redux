import { Component } from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store'
import { HOUR, SECOND } from "./state-management/reducers/reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  click$$ = new Subject();
  clock: any;

  constructor(store: Store<any>) {
    this.clock = store.select('clock');

    Observable.merge(
        this.click$$.mapTo({ type: HOUR, payload: 2 }), // add 2 hours
        Observable.interval(1000).mapTo({ type: SECOND, payload: 1 })
      )
      .subscribe((action) => {
        store.dispatch(action)
      })
  }
}
