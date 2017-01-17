import React, { Component } from 'react';
import { connect } from 'react-redux';
import Homepage from './Homepage.js';
import { fetchEvents } from 'actions/events';
import { fetchAnnouncements } from 'actions/announcements';
function mapStateToProps (state) {
  return {
    user: 'a',
    events: state.event,
    announcements: state.announcement
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadEvents: () => {
    dispatch(fetchEvents());
  },
  loadAnnouncements: () => {
    dispatch(fetchAnnouncements());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
