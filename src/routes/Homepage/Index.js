import React, { Component } from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../../containers/HeaderContainer';
import HomepageContainer from './HomepageContainer';
class Index extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <HomepageContainer />
      </div>
    );
  }
}

export default Index;
