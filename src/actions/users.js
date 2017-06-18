import cookie from 'react-cookie';
import { API_BASE_URL } from '../config';
import Hashids from 'hashids';

export const LOGIN_FROM_JWT_SUCCESS = 'LOGIN_FROM_JWT_SUCCESS';
export function loginFromJWT (token) {
	cookie.save('token',token, {path: '/'});
	console.log("aa");
    return (dispatch) => {
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
        const token = cookie.load('token');
        // const token = getState().user.token;

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

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

export function recordEvent(event, context) {

    return (dispatch, getState) => {
        let udid = cookie.load('udid');
        if(!udid) {
            let hid = new Hashids();
            udid = hid.encode(Math.floor(Date.now()))+"-"+s4();
            console.log("saving new udid",udid);
            cookie.save('udid',udid, {path: '/'});

        }
        const token = cookie.load('token');
        let d = new FormData();
        d.append('event', event);
        d.append('context', JSON.stringify(context));
        d.append('udid', udid);
        return fetch(`${API_BASE_URL}/stats?token=${token}`,
            {
                method: 'POST',
                body:   d,
            })
            .then((response) => response.json())
            .then((json) => {console.log(json)});
    };




}