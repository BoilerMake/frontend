import React, { Component } from 'react';
import UserSettingsContainer from '../containers/UserSettingsContainer.js';
import HeaderContainer from '../containers/HeaderContainer';
class UserSettingsPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <UserSettingsContainer />
      </div>
    );
  }
}

export default UserSettingsPage;
