
import {
    RECEIVE_APPLICATION,
    REQUEST_APPLICATION,
    START_RESUME_UPLOAD,
    FINISH_RESUME_UPLOAD,
    RESUME_UPLOAD_PROGRESS,
    CHANGE_APPLICATION_FIELD_VALUE,
    TOGGLE_APPLICATION_FIELD_VALUE
} from '../actions/application';

const INITIAL_STATE = {
    application: {},
    validation: {},
    error: null,
    loading: false,
    uploadProgress: 0,
    isUploading: false,
    uploadingFileName: null,
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

        case START_RESUME_UPLOAD:
            return {...state,
                isUploading: true,
                uploadProgress: 0,
                uploadingFileName: action.fileName,
            };
        case FINISH_RESUME_UPLOAD:
            return {...state,
                isUploading: false,
                uploadProgress: 100,

                application: {
                    ...state.application,
                    resume_uploaded: true,
                    resume_filename: action.fileName
                }
            };
        case RESUME_UPLOAD_PROGRESS:
            return {...state, uploadProgress: action.progress};

        case CHANGE_APPLICATION_FIELD_VALUE:
            return {
                ...state,
                application: {
                    ...state.application,
                    [field]: value
                }
            };
        case TOGGLE_APPLICATION_FIELD_VALUE:
            let oldValue = state.application[field];
            return {
                ...state,
                application: {
                    ...state.application,
                    [field]: !oldValue
                }
            };
        default:
            return state;
    }
}