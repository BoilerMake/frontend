import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMe, loginFromJWT } from 'actions/users';
import Login from './Login.js';

function mapStateToProps (state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => {
    dispatch(fetchMe());
  },
  login: (token) => {
    dispatch(loginFromJWT(token));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
