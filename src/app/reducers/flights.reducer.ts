// Actions
import { FLIGHTS_ACTION, FlightsAction } from '../actions/flights.action';

const initialState = {
  flights: [],
};

export function flightReducer(state = initialState, action: FlightsAction) {
  switch (action.type) {
    case FLIGHTS_ACTION.GET_FLIGHTS:
      return {
        ...state,
        flights: action.payload
      };
    default:
      return state;
  }
}
