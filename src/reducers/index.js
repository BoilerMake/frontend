import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
// import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {} }, action) => {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities)
    }

    return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
    const { type, error } = action

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return error
    }

    return state
}
import { reducer as formReducer } from 'redux-form'
import UserReducer from './reducer_user';
const rootReducer = combineReducers({
    user: UserReducer,
    // entities,
    // errorMessage,
    form: formReducer
    // routing
})

export default rootReducer