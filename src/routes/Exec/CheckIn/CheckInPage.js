import React, { Component } from 'react';
import CheckInContainer from './CheckInContainer';
import HeaderContainer from 'containers/HeaderContainer';
class CheckInPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <CheckInContainer />
      </div>
    );
  }
}

export default CheckInPage;
