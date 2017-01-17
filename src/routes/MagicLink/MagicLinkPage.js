import React, { Component } from 'react';
import MagicLinkContainer from './MagicLinkContainer';
import HeaderContainer from 'containers/HeaderContainer';
class MagicLinkPage extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <MagicLinkContainer jwt={this.props.location.query.t} />
      </div>
    );
  }
}

export default MagicLinkPage;
