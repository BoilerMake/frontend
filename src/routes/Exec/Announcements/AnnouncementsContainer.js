import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAnnouncements, addAnnouncement } from 'actions/announcements';
import Announcements from './Announcements';
import { API_BASE_URL } from 'config';

function mapStateToProps (state) {
  return {
    list: state.announcement.announcements
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadAnnouncements: () => {
    dispatch(fetchAnnouncements());
  },
  addAnnouncement: (data) => {
    dispatch(addAnnouncement(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);
