// Angular
import { Action } from '@ngrx/store';

// Models
import { FlightModel } from '../models/flight.model';

export namespace FLIGHTS_ACTION {
  export const GET_FLIGHTS = 'GET_FLIGHTS';
}

export class GetFlights implements Action {
  readonly type = FLIGHTS_ACTION.GET_FLIGHTS;

  constructor(
    public payload: FlightModel[]
  ) {}
}

export type FlightsAction = GetFlights;
