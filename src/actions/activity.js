import { API_BASE_URL } from 'config';

export const REQUEST_ACTIVITY = 'REQUEST_ACTIVITY';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';

export function fetchActivity () {
  return (dispatch) => {
    dispatch(requestActivity());
    return fetch(`${API_BASE_URL}/activity`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveActivity(json)));
  };
}

function requestActivity () {
  return {
    type: REQUEST_ACTIVITY
  };
}

function receiveActivity (json) {
  if ('error' in json) {
    json = null;
  }
  return {
    type: RECEIVE_ACTIVITY,
    activity: json,
    receivedAt: Date.now()
  };
}
