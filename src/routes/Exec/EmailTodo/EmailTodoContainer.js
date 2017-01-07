import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHackerList, doUserAction } from 'actions/exec';
import EmailTodo from './EmailTodo';

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

export default connect(mapStateToProps, mapDispatchToProps)(EmailTodo);
