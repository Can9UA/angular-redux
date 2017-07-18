import { Component } from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  click$$ = new Subject();
  clock$: Observable<Date>;

  constructor() {
    this.clock$ = Observable.merge(
        this.click$$, // will update when press the button
        Observable.interval(1000) // will automatically updated every 1 seconds
      )
      .startWith(new Date())
      .scan((accumulator: Date, curr) => {
        const date = new Date(accumulator.getTime());

        date.setSeconds(date.getSeconds() + 1);

        return date;
      });

  }
}
