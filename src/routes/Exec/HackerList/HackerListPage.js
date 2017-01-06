import React, { Component } from 'react';
import HackerListContainer from './HackerListContainer';
import HeaderContainer from 'containers/HeaderContainer';
class HackerListPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <HackerListContainer />
      </div>
    );
  }
}

export default HackerListPage;
