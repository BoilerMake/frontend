import * as ActionTypes from '../actions'
// import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import UserReducer from './reducer_user';
// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
    const { type, error } = action

    // if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    //     return null
    // } else if (error) {
    //     return error
    // }

    return state
}

const rootReducer = combineReducers({
    user: UserReducer,
    errorMessage,
    form: formReducer
    // routing
})

export default rootReducer