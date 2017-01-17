import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import HeaderContainer from 'containers/HeaderContainer';

class AuthPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <LoginContainer />
      </div>
    );
  }
}
export default AuthPage;
