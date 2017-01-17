import React, { Component } from 'react';
import SponsorPortalContainer from './SponsorPortalContainer';
import HeaderContainer from 'containers/HeaderContainer';
class SponsorPortalPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <SponsorPortalContainer />
      </div>
    );
  }
}

export default SponsorPortalPage;
