import React, { Component, PropTypes } from 'react';

export default class HackerDecisionText extends Component {
  render () {
    let decision = this.props.decision;
    let text = 'no decision';
    if (decision === 0) text = 'no decision';
    if (decision === 1) text = 'reject';
    if (decision === 2) text = 'waitlist';
    if (decision === 3) text = 'accept';
    if (decision === 4) text = 'expired';
    return (<span>
      {text}
    </span>
    );
  }
}
