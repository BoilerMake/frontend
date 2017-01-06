import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import EventReducer from './reducer_event';
import ExecReducer from './reducer_exec';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  event: EventReducer,
  exec: ExecReducer,
  form: formReducer
});

export default rootReducer;
