import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import EventReducer from './reducer_event';
import ExecReducer from './reducer_exec';
import AnnoucementReducer from './reducer_announcement';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  event: EventReducer,
  announcement: AnnoucementReducer,
  exec: ExecReducer,
  form: formReducer
});

export default rootReducer;
