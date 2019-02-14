// Models
import { FlightModel } from './models/flight.model';

export interface AppState {
  flights: {
    flights: FlightModel[]
  };
}
