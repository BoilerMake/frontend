import React, { Component, PropTypes } from 'react';
import PrettyJSON from 'components/PrettyJSON';
import { Router, Route, Link, browserHistory } from 'react-router';
import HackerDecisionText from 'components/HackerDecisionText';
import moment from 'moment';
export default class AccessCardList extends Component {
  render () {
    let hackers = this.props.hackers;
    let hackerList = hackers.map(hacker => {
      return <div className='panel panel-default' key={hacker.id}>
        <div className='panel-heading'>{hacker.first_name} {hacker.last_name} (#{hacker.id}) <Link to={`/exec/users/${hacker.id}`}>view</Link></div>
        <div className='panel-body'>
          <strong>School:</strong> {hacker.application.school ? hacker.application.school.name : ''}
          <br />
          <strong>RSVP:</strong> {hacker.application.rsvp ? 'yes' : 'no'}
          <br />
          <strong>Decision:</strong> <HackerDecisionText decision={hacker.application.decision} />
          <br />
        </div>
      </div>;
    });
    return (<div>
      {hackerList}
    </div>
    );
  }
}
