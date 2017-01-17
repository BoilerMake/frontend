import React, { Component, PropTypes } from 'react';
export default class MagicLink extends Component {
  componentDidMount () {
    this.props.logoutUser();
    let jwt = this.props.jwt;
    console.log('test', jwt);
    setTimeout(() => { this.props.loginFromJWT(jwt); }, 200);
  }
  render () {
    return (
      <div className='container' >
        <br />
        <br />
        <br />
        <br />
        <br />
        Yay you're logged in! Use one of the menu items above to find what you're looking for :)
      </div>);
  }
}
