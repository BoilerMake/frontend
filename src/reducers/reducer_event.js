
import {
  REQUEST_EVENTS,
  RECEIVE_EVENTS
} from '../actions/events';

const INITIAL_STATE = { events: null, lastUpdated: null, loading: false };

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {

    case REQUEST_EVENTS:
      return { ...state, loading: true };
    case RECEIVE_EVENTS:
      // todo: validation
      return { ...state,
        loading: false,
        events: action.events,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
