import React, { Component } from 'react';
import { connect } from 'react-redux';
import SponsorPortal from './SponsorPortal';

function mapStateToProps (state) {
  return {
    current_token: state.user.token
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  // loginFromJWT: (token) => {
  //   dispatch(loginFromJWT(token));
  // },
  // logoutUser: () => {
  //   dispatch(logoutUser());
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(SponsorPortal);
