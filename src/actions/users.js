import cookie from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { API_BASE_URL } from '../config';
import Hashids from 'hashids';
import ReactGA from 'react-ga';

export const LOGIN_FROM_JWT_SUCCESS = 'LOGIN_FROM_JWT_SUCCESS';
export function loginFromJWT (token) {
	cookie.save('token',token, {path: '/'});
	console.log("aa");
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

export function recordEvent(event, subtitle, context) {

    return (dispatch, getState) => {
        let uuid = cookie.load('uuid');
        //if we don't have a uuid cookie set, generate a fresh one
        //uuid has 3 parts, separated by dash:
        //  Client identifier (i.e.) this is coming from React (r for short)
        //  HashId(current_unix_timestamp)
        // (random4digitstring)
        if(!uuid) {
            let hid = new Hashids();
            uuid = `r-${hid.encode(Math.floor(Date.now()))}-${s4()}`;
            console.log("saving new uuid",uuid);
            cookie.save('uuid',uuid, {path: '/'});
        }

        //send an event off to google analytics
        ReactGA.event({
            category: 'BoilerMake-Web',
            action: event
        });

        //and off to our API
        let d = new FormData();
        d.append('event', event);
        d.append('subtitle', subtitle);
        d.append('context', JSON.stringify(context));
        d.append('uuid', uuid);
        d.append('client', 'react');
        return fetch(`${API_BASE_URL}/stats?token=${cookie.load('token')}`,
            {
                method: 'POST',
                body:   d,
            })
            .then((response) => response.json())
            .then((json) => {console.log("logged Stat event",{event, context})});
    };




}