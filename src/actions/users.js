import { API_BASE_URL } from 'config';

export const REQUEST_ME = 'REQUEST_ME';
export const RECEIVE_ME = 'RECEIVE_ME';

export function fetchMe () {
  return (dispatch, getState) => {
    dispatch(requestMe());
    const token = getState().user.token;

    return fetch(`${API_BASE_URL}/users/me?token=${token}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveMe(json)));
  };
}

function requestMe () {
  return {
    type: REQUEST_ME
  };
}

function receiveMe (json) {
  if ('error' in json) {
    json = null;
  }
  return {
    type: RECEIVE_ME,
    me: json,
    receivedAt: Date.now()
  };
}

export const LOGOUT_USER = 'LOGOUT_USER';
export function logoutUser () {
  return {
    type: LOGOUT_USER
  };
}

export const LOGIN_FROM_JWT_SUCCESS = 'LOGIN_FROM_JWT_SUCCESS';
export function loginFromJWT (token) {
  return {
    type: LOGIN_FROM_JWT_SUCCESS,
    token: token
  };
}
