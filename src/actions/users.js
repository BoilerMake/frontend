import cookie from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { API_BASE_URL } from '../config';
import ReactGA from 'react-ga';
import apiFetch, { recordStatEvent } from './index';

export const LOGIN_FROM_JWT_SUCCESS = 'LOGIN_FROM_JWT_SUCCESS';
export function loginFromJWT (token) {
	cookie.save('token',token, {path: '/'});
    return (dispatch) => {
        let userId = jwt_decode(token).user_id;
        //when we've authenticated, let's associate the user_id (which lives inside the jwt) with GA
        ReactGA.set({ userId });
        dispatch(saveToken(token));
        setTimeout(() => { dispatch(fetchMe()); }, 50);
    }
}

function saveToken(token) {
    return {
        type: LOGIN_FROM_JWT_SUCCESS,
        token: token
    };
}
export const LOGOUT_USER = 'LOGOUT_USER';
export function logoutUser() {
    return function (dispatch) {
        dispatch({ type: LOGOUT_USER });
        cookie.remove('token', { path: '/' });
    }
}

export const REQUEST_ME = 'REQUEST_ME';
export const RECEIVE_ME = 'RECEIVE_ME';

export function fetchMe () {
    return (dispatch, getState) => {
        dispatch(requestMe());

        return apiFetch(`${API_BASE_URL}/users/me`)
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

export function recordEvent(event, subtitle, context) {
    return (dispatch, getState) => {
        return recordStatEvent(event, subtitle, context)
    };
}