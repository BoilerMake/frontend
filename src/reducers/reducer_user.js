
import {
    LOGIN_FROM_JWT_SUCCESS
} from '../actions/users';


const INITIAL_STATE = {
    authenticated: false,
    me: null,
    error: null,
    loading: false,
    token_data: null,
    token: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case LOGIN_FROM_JWT_SUCCESS:
            return { ...state,
                authenticated: true,
                error: null,
                loading: false,
                token_data: decodeJWT(action.token),
                token: action.token
            };
        default:
            return state;
    }
}

function urlBase64Decode (str) {
    if (str === undefined) { return; }
    let output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
        default:
        case 0:
            break;
        case 2:
            output += '==';
            break;
        case 3:
            output += '=';
            break;
    }
    return window.atob(output);
}

function decodeJWT (token) {
    let user = {};
    if (token !== undefined && token != null) {
        var encoded = token.split('.')[1];
        user = JSON.parse(urlBase64Decode(encoded));
    }
    return user;
}