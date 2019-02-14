// Angular
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// States
import { AppState } from './app.state';

// Services
import { GetService } from './services/get.service';
import {GetFlights} from './actions/flights.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [GetService]
})

export class AppComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private getService: GetService,
  ) {}

  ngOnInit() {
    this.getService.get().subscribe(data => {
      this.store.dispatch(new GetFlights(data));
    });
  }
}
