
import {
    REQUEST_USERS,
    RECEIVE_USERS,
    REQUEST_APPLICATIONS,
    RECEIVE_APPLICATIONS
} from '../actions/exec';


const INITIAL_STATE = {
    user_list: [],
    user_list_loading: false,
    application_list: [],
    application_list_loading: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_USERS:
            return { ...state, user_list_loading: true };
        case RECEIVE_USERS:
            //todo: error checking
            return { ...state,
                user_list_loading: false,
                user_list: action.json.data
            };
        case REQUEST_APPLICATIONS:
            return { ...state, application_list_loading: true };
        case RECEIVE_APPLICATIONS:
            //todo: error checking
            return { ...state,
                application_list_loading: false,
                application_list: action.json.data
            };
        default:
            return state;
    }
}