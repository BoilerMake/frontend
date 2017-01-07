import React, { Component, PropTypes } from 'react';
import PrettyJSON from 'components/PrettyJSON';
import HackerDecisionText from 'components/HackerDecisionText';
import moment from 'moment';
export default class EmailTodoList extends Component {
  render () {
    let hackerList = this.props.hackers.map(hacker => <span key={hacker.id}><p>{hacker.email} {hacker.first_name}</p></span>);
    console.log(this.props.hackers.map(hacker => hacker.id));
    return (<div>
      <h3>{this.props.title}</h3>
        user_ids: <pre>{this.props.hackers.map(hacker => hacker.id).join()}</pre>
      <pre>{hackerList}</pre>
    </div>
    );
  }
}
