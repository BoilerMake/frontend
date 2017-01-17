import React, { Component } from 'react';
import { connect } from 'react-redux';
import MagicLink from './MagicLink';
import { loginFromJWT, logoutUser } from 'actions/users';

function mapStateToProps (state) {
  return {
    current_token: state.user.token
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginFromJWT: (token) => {
    dispatch(loginFromJWT(token));
  },
  logoutUser: () => {
    dispatch(logoutUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MagicLink);
