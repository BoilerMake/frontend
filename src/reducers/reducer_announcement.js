
import {
  REQUEST_ANNOUNCEMENTS,
  RECEIVE_ANNOUNCEMENTS
} from '../actions/announcements';

const INITIAL_STATE = { announcements: null, lastUpdated: null, loading: false };

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {

    case REQUEST_ANNOUNCEMENTS:
      return { ...state, loading: true };
    case RECEIVE_ANNOUNCEMENTS:
      // todo: validation
      return { ...state,
        loading: false,
        announcements: action.announcements,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
