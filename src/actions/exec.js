import { API_BASE_URL } from 'config';

export const REQUEST_EXEC_USER_LIST = 'REQUEST_EXEC_USER_LIST';
export const RECEIVE_EXEC_USER_LIST = 'RECEIVE_EXEC_USER_LIST';

export function fetchUserList () {
  return (dispatch, getState) => {
    dispatch(requestUserList());
    const token = getState().user.token;

    return fetch(`${API_BASE_URL}/execs/users?token=${token}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveUserList(json)));
  };
}

function requestUserList () {
  return {
    type: REQUEST_EXEC_USER_LIST
  };
}

function receiveUserList (json) {
  if ('error' in json) {
    json = null;
  }
  return {
    type: RECEIVE_EXEC_USER_LIST,
    users: json,
    receivedAt: Date.now()
  };
}
