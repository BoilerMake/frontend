
import {
  REQUEST_ACTIVITY,
  RECEIVE_ACTIVITY
} from '../actions/activity';

const INITIAL_STATE = { activity: null, lastUpdated: null, loading: false };

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {

    case REQUEST_ACTIVITY:
      return { ...state, loading: true };
    case RECEIVE_ACTIVITY:
      // todo: validation
      return { ...state,
        loading: false,
        activity: action.activity,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
