// Angular
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// Models
import { FlightModel } from '../../models/flight.model';

// States
import { AppState } from '../../app.state';

@Component({
  selector: 'app-arriving-flights',
  templateUrl: './arriving-flights.template.html',
  styleUrls: ['./arriving-flights.style.less'],
})
export class ArrivingFlightsComponent implements OnInit {

  data: FlightModel[];
  flights: FlightModel[];

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.store.select('flights').subscribe( data => {
      this.data = data.flights.filter((item) => {
        return item.type === 'arriving';
      });
      this.flights = this.data;
    });
  }

  onSearch(searchString) {
    if (searchString === '') {
      this.flights = this.data;
    } else {
      this.flights = this.data.filter((item) => {
        return (item.number.search(searchString.toUpperCase()) + 1);
      });
    }
  }
}
