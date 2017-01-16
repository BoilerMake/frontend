import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserDetail } from 'actions/exec';
import UserDetail from './UserDetail';
import { API_BASE_URL } from 'config';

function mapStateToProps (state) {
  return {
    token: state.user.token
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  // loadData: () => {
  //   dispatch(fetchUserDetail());
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
