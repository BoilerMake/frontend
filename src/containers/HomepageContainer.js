import React, { Component } from 'react';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage.js';
import { fetchEvents } from '../actions/events';
function mapStateToProps (state) {
  return {
    user: 'a',
    events: state.event
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadEvents: () => {
    dispatch(fetchEvents());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
