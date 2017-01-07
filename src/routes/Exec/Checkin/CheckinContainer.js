import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHackerList, doUserAction } from 'actions/exec';
import CheckIn from './CheckIn';

function mapStateToProps (state) {
  return {
    exec: state.exec
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => {
    dispatch(fetchHackerList());
  },
  checkIn: (userId) => {
    dispatch(doUserAction('check-in', userId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
