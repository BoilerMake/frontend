import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMe } from '../actions/users';
import UserSettings from '../components/UserSettings.js';

function mapStateToProps (state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => {
    dispatch(fetchMe());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
