import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Index from './routes/Homepage/Index';
import App from './containers/App';
import NotFoundView from './pages/NotFoundView';
import UserSettings from './pages/UserSettings';
import MagicLinkPage from 'routes/MagicLink/MagicLinkPage';
import SponsorPortalPage from 'routes/SponsorPortal/SponsorPortalPage';

import UserListPage from 'routes/Exec/UserList/UserListPage';
import UserDetailPage from 'routes/Exec/UserDetail/UserDetailPage';
import HackerListPage from 'routes/Exec/HackerList/HackerListPage';
import CheckInPage from 'routes/Exec/CheckIn/CheckInPage';
import EmailTodoPage from 'routes/Exec/EmailTodo/EmailTodoPage';
import AnnouncementsPage from 'routes/Exec/Announcements/AnnouncementsPage';
import Login from './routes/Login/LoginPage';
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index} />
    <Route path='404' component={NotFoundView} />
    <Route path='settings' component={UserSettings} />
    <Route path='login' component={Login} />
    <Route path='signin' component={Login} />
    <Route path='exec/users' component={UserListPage} />
    <Route path='exec/users/:user_id' component={UserDetailPage} />
    <Route path='exec/hackers' component={HackerListPage} />
    <Route path='exec/checkin' component={CheckInPage} />
    <Route path='exec/emailstosend' component={EmailTodoPage} />
    <Route path='exec/announcements' component={AnnouncementsPage} />
    <Route path='sponsorportal' component={SponsorPortalPage} />
    <Route path='l' component={MagicLinkPage} />
    <Redirect from='*' to='404' />
  </Route>
);
