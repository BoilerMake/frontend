import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import UserReducer from './reducer_user';
const rootReducer = combineReducers({
    user: UserReducer,
    form: formReducer,
    toastr: toastrReducer
});

export default rootReducer