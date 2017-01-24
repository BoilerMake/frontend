import React, { Component } from 'react';
import { connect } from 'react-redux';
import OffSeason from './OffSeason.js';
import { fetchEvents } from 'actions/events';
import { fetchAnnouncements } from 'actions/announcements';
import { fetchActivity } from 'actions/activity';
function mapStateToProps (state) {
  return {
    user: 'a',
    events: state.event,
    announcements: state.announcement,
    activity: state.activity.activity
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadEvents: () => {
    dispatch(fetchEvents());
  },
  loadAnnouncements: () => {
    dispatch(fetchAnnouncements());
  },
  loadActivity: () => {
    dispatch(fetchActivity());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(OffSeason);
