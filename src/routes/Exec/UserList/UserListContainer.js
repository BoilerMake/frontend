import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserList } from 'actions/exec';
import UserList from './UserList';

function mapStateToProps (state) {
  return {
    exec: state.exec
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => {
    dispatch(fetchUserList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
