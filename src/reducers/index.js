import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import EventReducer from './reducer_event';
import ExecReducer from './reducer_exec';
import AnnouncementReducer from './reducer_announcement';
import ActivityReducer from './reducer_activity';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  event: EventReducer,
  announcement: AnnouncementReducer,
  activity: ActivityReducer,
  exec: ExecReducer,
  form: formReducer
});

export default rootReducer;
