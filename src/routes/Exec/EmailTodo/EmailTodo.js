import React, { Component, PropTypes } from 'react';
import EmailTodoList from './EmailTodoList';
export default class EmailTodo extends Component {
  componentDidMount () {
    this.props.loadData();
  }
  render () {
    let hackers = this.props.exec.hackers;
    let previouslyUndecidedNowAccepted = hackers.filter(hacker => (hacker.application.emailed_decision == null && hacker.application.decision === 3));
    let previouslyUndecidedNowWaitListed = hackers.filter(hacker => (hacker.application.emailed_decision == null && hacker.application.decision === 2));
    let previouslyUndecidedNowRejected = hackers.filter(hacker => (hacker.application.emailed_decision == null && hacker.application.decision === 1));
    let previouslyWaitListedNowAccepted = hackers.filter(hacker => (hacker.application.emailed_decision === 2 && hacker.application.decision === 3));

    return (<div style={{ backgroundColor: '#F3F8FB', padding: '10px' }}>
      <div className='container'>
        <h2>Emails to be sent</h2>
        <button onClick={this.props.loadData}>Reload Data</button>
        <hr />
        <EmailTodoList hackers={previouslyUndecidedNowAccepted} title='Previously Undecided, now Accepted' />
        <EmailTodoList hackers={previouslyUndecidedNowWaitListed} title='Previously Undecided, now Wait listed' />
        <EmailTodoList hackers={previouslyUndecidedNowRejected} title='Previously Undecided, now Rejected' />
        <EmailTodoList hackers={previouslyWaitListedNowAccepted} title='Previously Wait listed, now Accepted' />
      </div>
    </div>
    );
  }
}
