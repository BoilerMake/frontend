
import {
  LOGOUT_USER,
  REQUEST_ME,
  RECEIVE_ME,
  LOGIN_FROM_JWT_SUCCESS
} from '../actions/users';

import { decodeJWT } from '../Utils';

const INITIAL_STATE = { me: null, status: null, error: null, loading: false };

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {

    case LOGIN_FROM_JWT_SUCCESS:
      return { ...state, status:'authenticated', token: action.token, error: null, loading: false, token_data: decodeJWT(action.token) }; // <-- authenticated
    case REQUEST_ME:
      return { ...state, loading: true };
    case RECEIVE_ME:
      let u = action.me;
      if (action.me !== null && 'error' in action.me) {
        console.log('oops');
        u = null;
      }
      return { ...state,
        loading: false,
        me: u,
        lastUpdated: action.receivedAt
      };

    case LOGOUT_USER:
      return { ...state, me: null, status:'logout', token: null, error:null, loading: false, token_data: null };

    default:
      return state;
  }
}
