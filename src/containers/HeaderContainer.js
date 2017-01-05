import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser, signInUser } from '../actions/users';
import MainNavBar from '../components/Nav.js';

function mapStateToProps (state) {
  let isAuthenticated = state.user.status === 'authenticated';
  return {
    isAuthenticated: isAuthenticated,
    user: state.user,
    isAdmin: isAuthenticated && state.user.token_data.roles.includes('admin')
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => {
    dispatch(logoutUser());
  },
  signin: () => {
    dispatch(signInUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
