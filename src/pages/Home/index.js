import React, { PureComponent } from 'react';
// import { Redirect } from 'react-router-dom';
// import Home from './Home';
import PostSix from './PostSix';

export default class HomeWrapper extends PureComponent {
  render() {
    // const start = new Date('Oct 19, 2018 00:00:00').getTime();
    // const end = new Date('Oct 21, 2018 23:59:59').getTime();
    // const now = new Date();
    //
    // const live = now > start && now < end ? true : false;
    // return live ? <Redirect to="/live" /> : <Home />;
    return <PostSix />;
  }
}
