import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import EventReducer from './reducer_event';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  event: EventReducer,
  form: formReducer
});

export default rootReducer;
