import { Component } from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store'

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
        this.click$$.mapTo('hour'), // will update when press the button (add 1 hour)
        Observable.interval(1000).mapTo('second') // will automatically updated every 1 seconds (add 1 sec)
      )
      .subscribe((type)=>{
        store.dispatch({type})
      })
  }
}
