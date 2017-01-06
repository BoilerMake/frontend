import React, { Component } from 'react';
import countdown from 'countdown';

export default class Countdown extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render = () => {
    let c = countdown(this.props.date).toString();
    return (
      <div>{c} {this.props.label}</div>
    );
  }
}
