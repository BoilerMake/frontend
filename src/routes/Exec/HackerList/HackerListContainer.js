import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHackerList } from 'actions/exec';
import HackerList from './HackerList';

function mapStateToProps (state) {
  return {
    exec: state.exec
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => {
    dispatch(fetchHackerList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HackerList);
