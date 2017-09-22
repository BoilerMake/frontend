import apiFetch  from './index';
import {toastr} from 'react-redux-toastr'

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

export function searchUsers (data) {
    return (dispatch) => {
        dispatch(requestUsers());
        return apiFetch('exec/users/search',
            {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((json) => {
                if(json.success) {
                    toastr.success('Success!', `query of ${JSON.stringify(data,null,2)} yielded ${json.data.length} results`);
                    dispatch(receiveUsers(json));
                } else {
                    toastr.error('ugh','something broke');
                }
        });
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

export const REQUEST_USER_DETAIL = 'REQUEST_USER_DETAIL';
export const RECEIVE_USER_DETAIL = 'RECEIVE_USER_DETAIL';

export function fetchUserDetail (userId) {
    return (dispatch) => {
        dispatch(requestUserDetail(userId));
        return apiFetch('exec/users/'+userId)
            .then((response) => response.json(userId))
            .then((json) => dispatch(receiveUserDetail(json,userId)));
    };
}

function requestUserDetail (userId) {
    return {
        type: REQUEST_USER_DETAIL,
        userId
    };
}

function receiveUserDetail (json, userId) {
    return {
        type: RECEIVE_USER_DETAIL,
        userId,
        json,
        receivedAt: Date.now()
    };
}

export const REQUEST_APPLICATION_DETAIL = 'REQUEST_APPLICATION_DETAIL';
export const RECEIVE_APPLICATION_DETAIL = 'RECEIVE_APPLICATION_DETAIL';

export function fetchApplicationDetail (applicationId) {
    return (dispatch) => {
        dispatch(requestApplicationDetail(applicationId));
        return apiFetch('exec/applications/'+applicationId)
            .then((response) => response.json(applicationId))
            .then((json) => dispatch(receiveApplicationDetail(json,applicationId)));
    };
}

function requestApplicationDetail (applicationId) {
    return {
        type: REQUEST_APPLICATION_DETAIL,
        applicationId
    };
}

function receiveApplicationDetail (json, applicationId) {
    return {
        type: RECEIVE_APPLICATION_DETAIL,
        applicationId,
        json,
        receivedAt: Date.now()
    };
}


export function checkInUser(user_id) {
    return (dispatch) => {
        return apiFetch(`exec/users/${user_id}/checkin`,
            {method: 'POST'})
            .then((response) => response.json())
            .then((json) => {
                if(json.success) {
                    toastr.success('Success!', json.data);
                } else {
                    toastr.error('eek!', json.message);
                }
            });
    };
}