import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Index from './pages/Index';
import App from './containers/App';
import NotFoundView from './pages/NotFoundView';
import UserSettings from './pages/UserSettings';
import UserList from './pages/Exec/UserList';
import Login from './pages/Login';
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index} />
    <Route path='404' component={NotFoundView} />
    <Route path='settings' component={UserSettings} />
    <Route path='login' component={Login} />
    <Route path='exec/users' component={UserList} />
    <Redirect from='*' to='404' />
  </Route>
);
