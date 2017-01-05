import React, { Component } from 'react';

export default class PrettyJSON extends Component {

  render () {
    return <div><pre>{JSON.stringify(this.props.data, null, 2) }</pre></div>;
  }
}
