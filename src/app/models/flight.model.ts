export class FlightModel {
  place: string;
  number: string;
  type: string;
  time: string;
}

export interface Flights {
  flights: FlightModel[];
}
