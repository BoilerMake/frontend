import apiFetch  from './index';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export function fetchUsers () {
    return (dispatch) => {
        dispatch(requestUsers());
        return apiFetch('exec/users')
            .then((response) => response.json())
            .then((json) => dispatch(receiveUsers(json)));
    };
}

function requestUsers () {
    return {
        type: REQUEST_USERS
    };
}

function receiveUsers (json) {
    return {
        type: RECEIVE_USERS,
        json,
        receivedAt: Date.now()
    };
}

export const REQUEST_APPLICATIONS = 'REQUEST_APPLICATIONS';
export const RECEIVE_APPLICATIONS = 'RECEIVE_APPLICATIONS';

export function fetchApplications () {
    return (dispatch) => {
        dispatch(requestApplications());
        return apiFetch('exec/applications')
            .then((response) => response.json())
            .then((json) => dispatch(receiveApplications(json)));
    };
}

function requestApplications () {
    return {
        type: REQUEST_APPLICATIONS
    };
}

function receiveApplications (json) {
    return {
        type: RECEIVE_APPLICATIONS,
        json,
        receivedAt: Date.now()
    };
}