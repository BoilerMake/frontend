import apiFetch from './index';
import {toastr} from 'react-redux-toastr'
import { recordStatEvent } from './index';

export const REQUEST_APPLICATION = 'REQUEST_APPLICATION';
export const RECEIVE_APPLICATION = 'RECEIVE_APPLICATION';

export function fetchApplication () {
    return (dispatch) => {
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

export function updateApplication(suppressToast=false) {
    return (dispatch, getState) => {
        let data = getState().application.application;
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
export const START_RESUME_UPLOAD = 'START_RESUME_UPLOAD';
export const FINISH_RESUME_UPLOAD = 'FINISH_RESUME_UPLOAD';
export const RESUME_UPLOAD_PROGRESS = 'RESUME_UPLOAD_PROGRESS';

export function startResumeUpload(fileName) {
    return (dispatch) => {
        toastr.info("hang tight!",`uploading ${fileName}`);
        dispatch({
            type: START_RESUME_UPLOAD,
            fileName
        })
    }
}

export function finishResumeUpload(fileName,status) {
    return (dispatch) => {
        let success = (status===200);

        dispatch({
            type: FINISH_RESUME_UPLOAD,
            fileName
        });

        if(success) {
            dispatch(updateApplication(true));
            toastr.success('Resume Upload Success', `uploaded ${fileName}`);
        } else {
            //todo: ??
            toastr.error('Oops!','something went wrong... try again');
        }
        recordStatEvent("resumeUploadFinished",null,{success, fileName, status});
    };
}


export function resumeUploadProgress(event) {
    let progress = event.loaded/event.total*100;
    return {
        type: RESUME_UPLOAD_PROGRESS,
        progress
    }
}
export const CHANGE_APPLICATION_FIELD_VALUE = 'CHANGE_APPLICATION_FIELD_VALUE';
export function changeApplicationFieldValue(field, value) {
    return {
        type: CHANGE_APPLICATION_FIELD_VALUE,
        field,
        value
    }
}
export const TOGGLE_APPLICATION_FIELD_VALUE = 'TOGGLE_APPLICATION_FIELD_VALUE';
export function toggleApplicationFieldValue(field) {
    return {
        type: TOGGLE_APPLICATION_FIELD_VALUE,
        field
    }

}