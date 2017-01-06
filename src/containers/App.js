import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import AppComponent from '../components/App.js';

function mapStateToProps (state) {
  let loggedIn = state.user.status === 'authenticated';
  return {
    isAuthenticated: loggedIn,
    user: state.user,
    isExec: loggedIn ? state.user.token_data.roles.includes('exec') : false,
    isHacker: loggedIn ? state.user.token_data.roles.includes('hacker') : false
  };
}

const mapDispatchToProps = (dispatch) => ({
  resetMe: () => {
    dispatch(logoutUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
