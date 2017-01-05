import { API_BASE_URL } from 'config';

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export function fetchEvents () {
  return (dispatch) => {
    dispatch(requestEvents());
    return fetch(`${API_BASE_URL}/events/`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveEvents(json)));
  };
}

function requestEvents () {
  return {
    type: REQUEST_EVENTS
  };
}

function receiveEvents (json) {
  if ('error' in json) {
    json = null;
  }
  return {
    type: RECEIVE_EVENTS,
    events: json,
    receivedAt: Date.now()
  };
}
