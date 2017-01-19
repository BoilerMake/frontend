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


export function addAnnouncement (body) {
  return (dispatch, getState) => {
    const token = getState().user.token;
    console.log(body);
    return fetch(`${API_BASE_URL}/execs/announcements/add?token=${token}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((json) => dispatch(fetchAnnouncements()));
  };
}
