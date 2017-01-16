import React, { Component } from 'react';
import UserDetailContainer from './UserDetailContainer';
import HeaderContainer from 'containers/HeaderContainer';
class UserDetailPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <UserDetailContainer user_id={this.props.params.user_id} />
      </div>
    );
  }
}

export default UserDetailPage;
