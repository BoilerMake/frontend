import React, { Component } from 'react';
import AnnouncementsContainer from './AnnouncementsContainer';
import HeaderContainer from 'containers/HeaderContainer';
class AnnouncementsPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <AnnouncementsContainer/>
      </div>
    );
  }
}

export default AnnouncementsPage;
