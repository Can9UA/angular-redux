import { Component } from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

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
      Observable.interval(5000) // will automatically updated every 5 seconds
    ).map(() => new Date());
  }
}
