import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser, signInUser } from '../actions/users';
import MainNavBar from '../components/Nav.js';

function mapStateToProps (state) {
  let isLoggedIn = state.user.status === 'authenticated';
  return {
    isLoggedIn: isLoggedIn,
    user: state.user,
    isExec: isLoggedIn && state.user.token_data.roles.includes('exec'),
    isHacker: isLoggedIn && state.user.token_data.roles.includes('hacker')
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => {
    dispatch(logoutUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
