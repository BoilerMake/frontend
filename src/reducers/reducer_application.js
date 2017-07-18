
import {
    RECEIVE_APPLICATION,
    REQUEST_APPLICATION,
    RECEIVE_SCHOOL_LIST,
    START_RESUME_UPLOAD,
    FINISH_RESUME_UPLOAD,
    RESUME_UPLOAD_PROGRESS,
    CHANGE_APPLICATION_FIELD_VALUE,
    TOGGLE_APPLICATION_FIELD_VALUE
} from '../actions/application';

export const INITIAL_STATE = {
    applicationForm: {},
    validation: {},
    error: null,
    loading: false,
    uploadProgress: 0,
    isResumeUploading: false,
    uploadingFileName: null,
    schools: [],
};

export default function (state = INITIAL_STATE, action) {
    let { field, value } = action;

    switch (action.type) {
        case REQUEST_APPLICATION:
            return { ...state, loading: true };
        case RECEIVE_APPLICATION:
            //todo: error checking
            return { ...state,
                loading: false,
                ...action.json.data
            };
        case RECEIVE_SCHOOL_LIST:
            return {
                ...state,
                schools: action.json.data
            };
        case START_RESUME_UPLOAD:
            return {...state,
                isResumeUploading: true,
                uploadProgress: 0,
                uploadingFileName: action.fileName,
            };
        case FINISH_RESUME_UPLOAD:
            return {...state,
                isResumeUploading: false,
                uploadProgress: 100,

                applicationForm: {
                    ...state.applicationForm,
                    resume_uploaded: true,
                    resume_filename: action.fileName
                }
            };
        case RESUME_UPLOAD_PROGRESS:
            return {...state, uploadProgress: action.progress};

        case CHANGE_APPLICATION_FIELD_VALUE:
            return {
                ...state,
                applicationForm: {
                    ...state.applicationForm,
                    [field]: value
                }
            };
        case TOGGLE_APPLICATION_FIELD_VALUE:
            let oldValue = state.applicationForm[field];
            return {
                ...state,
                applicationForm: {
                    ...state.applicationForm,
                    [field]: !oldValue
                }
            };
        default:
            return state;
    }
}