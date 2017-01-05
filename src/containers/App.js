import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import AppComponent from '../components/App.js';

function mapStateToProps (state) {
  return {
    authenticatedUser: state.user.status === 'authenticated' ? state.user.user : null,
    isAuthenticated: state.user.status === 'authenticated',
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => ({
  resetMe: () => {
    dispatch(logoutUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
