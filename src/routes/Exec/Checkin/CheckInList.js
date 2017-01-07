import React, { Component, PropTypes } from 'react';
import PrettyJSON from 'components/PrettyJSON';
import HackerDecisionText from 'components/HackerDecisionText';
import moment from 'moment';
export default class CheckInList extends Component {
  render () {
    let hackers = this.props.hackers;
    let hackerList = hackers.map(hacker => {
      let cleared = hacker.application.rsvp && (hacker.application.checked_in_at === null);
      return <div className='panel panel-default' key={hacker.id}>
        <div className='panel-heading'>{hacker.first_name} {hacker.last_name} (#{hacker.id})</div>
        <div className='panel-body'>
          <strong>School:</strong> {hacker.application.school ? hacker.application.school.name : ''}
          <br />
          <strong>RSVP:</strong> {hacker.application.rsvp ? 'yes' : 'no'}
          <br />
          <strong>Decision:</strong> <HackerDecisionText decision={hacker.application.decision} />
          <br />
          <strong>Completed:</strong> {hacker.application.completed ? 'yes' : 'no'}
          <br />
          <strong>Good to checkin:</strong> {cleared ? 'yes' : 'NO'}
          <br />
          <strong>Checked in:</strong> {hacker.application.checked_in_at ? moment(hacker.application.checked_in_at).fromNow() : 'not yet'}
          <br />
          <button onClick={() => this.props.checkIn(hacker.id)} disabled={!cleared}>Check In</button>
        </div>
      </div>;
    });
    return (<div>
      {hackerList}
    </div>
    );
  }
}
