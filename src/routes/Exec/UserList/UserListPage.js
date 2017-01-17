import React, { Component } from 'react';
import UserListContainer from './UserListContainer';
import HeaderContainer from 'containers/HeaderContainer';
class UserListPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <UserListContainer />
      </div>
    );
  }
}

export default UserListPage;
