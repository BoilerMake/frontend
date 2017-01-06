import React, { Component } from 'react';
import UserListContainer from 'containers/Exec/UserListContainer';
import HeaderContainer from 'containers/HeaderContainer';
class UserList extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <UserListContainer />
      </div>
    );
  }
}

export default UserList;
