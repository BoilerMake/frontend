import apiFetch from './index';
import {toastr} from 'react-redux-toastr'


export const REQUEST_APPLICATION = 'REQUEST_APPLICATION';
export const RECEIVE_APPLICATION = 'RECEIVE_APPLICATION';

export function fetchApplication () {
    return (dispatch, getState) => {
        dispatch(requestApplication());

        return apiFetch('users/me/application')
            .then((response) => response.json())
            .then((json) => dispatch(receiveApplication(json)));
    };
}

function requestApplication () {
    return {
        type: REQUEST_APPLICATION
    };
}

function receiveApplication (json) {
    if ('error' in json) {
        json = null;
    }
    return {
        type: RECEIVE_APPLICATION,
        json,
        receivedAt: Date.now()
    };
}

export function updateApplication(data,suppressToast) {
    return (dispatch) => {
        return apiFetch('users/me/application',
            {
                method: 'PUT',
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((json) => {
                if(json.success && !suppressToast)
                    toastr.success('Success!', 'Your application has been saved');
                dispatch(fetchApplication())
            });
    };
}