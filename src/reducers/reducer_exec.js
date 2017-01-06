
import {
  REQUEST_EXEC_USER_LIST,
  RECEIVE_EXEC_USER_LIST,

  REQUEST_EXEC_HACKER_LIST,
  RECEIVE_EXEC_HACKER_LIST
} from '../actions/exec';
const INITIAL_STATE = {
  error: null,
  users: null,
  users_loading: false,
  users_lastUpdated: null,
  hackers: null,
  hackers_loading: false,
  hackers_lastUpdated: null
};
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
    case REQUEST_EXEC_HACKER_LIST:
      return { ...state, hacker_list_loading: true };
    case RECEIVE_EXEC_HACKER_LIST:
      return { ...state,
        hackers_loading: false,
        hackers: action.hackers,
        hackers_lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
