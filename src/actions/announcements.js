import { API_BASE_URL } from 'config';

export const REQUEST_ANNOUNCEMENTS = 'REQUEST_ANNOUNCEMENTS';
export const RECEIVE_ANNOUNCEMENTS = 'RECEIVE_ANNOUNCEMENTS';

export function fetchAnnouncements () {
  return (dispatch) => {
    dispatch(requestAnnouncements());
    return fetch(`${API_BASE_URL}/announcements/`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveAnnouncements(json)));
  };
}

function requestAnnouncements () {
  return {
    type: REQUEST_ANNOUNCEMENTS
  };
}

function receiveAnnouncements (json) {
  if ('error' in json) {
    json = null;
  }
  return {
    type: RECEIVE_ANNOUNCEMENTS,
    announcements: json,
    receivedAt: Date.now()
  };
}
