import React, { Component } from 'react';
import AccessCardContainer from './AccessCardContainer';
import HeaderContainer from 'containers/HeaderContainer';
class AccessCardPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <AccessCardContainer />
      </div>
    );
  }
}

export default AccessCardPage;
