import React, { Component } from 'react';
import EmailTodoContainer from './EmailTodoContainer';
import HeaderContainer from 'containers/HeaderContainer';
class EmailTodoPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <EmailTodoContainer />
      </div>
    );
  }
}

export default EmailTodoPage;
