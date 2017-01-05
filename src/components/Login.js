import React, { Component, PropTypes } from 'react';
import PrettyJSON from './PrettyJSON';
import LoginForm from './LoginForm';
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
export default class Login extends Component {

  handleSubmit = (values) => {
    let d = new FormData();
    d.append('email', values.email);
    d.append('password', values.password);
    fetch(`${API_BASE_URL}/auth`, {
      method: 'POST',
      body: d
    }).then((response) => response.json())
      .then((json) => {
        if (json.token !== undefined) {
          console.log('yay');
          this.props.login(json.token);
          setTimeout(() => {this.props.loadData();},400);
        } else {
          console.log('sad');
          throw new SubmissionError({ _error: 'Login failed! :(' });
        }
      });
    // throw new SubmissionError({ _error: 'Login failed! :(' })
    console.log(values);
  };

  render () {
    return (
      <div className='container'>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>);
  }
}
