import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clock = Observable.interval(1000)
                    .map(() => new Date());

  constructor() {
    this.clock.subscribe((i) => console.log(i));
  }
}
