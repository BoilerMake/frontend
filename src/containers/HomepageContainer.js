import React, { Component } from 'react';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage.js';

function mapStateToProps (state) {
  return {
    user: 'a'
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
