
import {
    RECEIVE_APPLICATION,
    REQUEST_APPLICATION,
} from '../actions/application';

const INITIAL_STATE = {
    application: {},
    validation: {},
    error: null,
    loading: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_APPLICATION:
            return { ...state, loading: true };
        case RECEIVE_APPLICATION:
            //todo: error checking
            return { ...state,
                loading: false,
                ...action.json.data
            };

        default:
            return state;
    }
}