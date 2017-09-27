import apiFetch  from './index';
import {toastr} from 'react-redux-toastr'

export const REQUEST_ANNOUNCEMENTS = 'REQUEST_ANNOUNCEMENTS';
export const RECEIVE_ANNOUNCEMENTS = 'RECEIVE_ANNOUNCEMENTS';

export function fetchAnnouncements () {
    return (dispatch) => {
        dispatch(requestAnnouncements());
        return apiFetch('announcements')
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
    return {
        type: RECEIVE_ANNOUNCEMENTS,
        json
    };
}

export function createAnnouncement (message) {
    return (dispatch) => {
        return apiFetch('exec/announcements',
            {
                method: 'POST',
                body: JSON.stringify({message})
            })
            .then((response) => response.json())
            .then((json) => {
                if(json.success) {
                    toastr.success('Success!', `announcement added`);
                    dispatch(fetchAnnouncements());
                } else {
                    toastr.error('ugh','something broke');
                }
            });
    };
}
