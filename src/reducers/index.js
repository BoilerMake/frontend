import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import UserReducer from './reducer_user';
import application from './reducer_application';
import exec from './reducer_exec';
import dayof from './reducer_dayof';
const rootReducer = combineReducers({
    user: UserReducer,
    form: formReducer,
    application,
    exec,
    dayof,
    toastr: toastrReducer
});

export default rootReducer