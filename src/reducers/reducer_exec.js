
import {
  REQUEST_EXEC_USER_LIST,
  RECEIVE_EXEC_USER_LIST
} from '../actions/exec';
const INITIAL_STATE = { users: null, error: null, users_loading: false, users_lastUpdated: null };
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_EXEC_USER_LIST:
      return { ...state, user_list_loading: true };
    case RECEIVE_EXEC_USER_LIST:
      return { ...state,
        users_loading: false,
        users: action.users,
        users_lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
