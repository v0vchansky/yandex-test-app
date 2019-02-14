// Angular
import { Component, Input } from '@angular/core';

// Models
import {FlightModel} from '../../models/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.template.html',
  styleUrls: ['./flight-card.style.less'],
})
export class FlightCardComponent {
  @Input() flightItem: FlightModel;
}
