
import {
    RECEIVE_ANNOUNCEMENTS,
    REQUEST_ANNOUNCEMENTS,
} from '../actions/dayof';

const INITIAL_STATE = {
    announcements: [],
    announcements_loading: true,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_ANNOUNCEMENTS:
            return { ...state, announcements_loading: true };
        case RECEIVE_ANNOUNCEMENTS:
            return { ...state,
                announcements_loading: false,
                announcements: action.json.data
            };
        default:
            return state;
    }
}