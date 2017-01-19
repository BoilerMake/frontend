import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class ActivityList extends Component {
  render () {
    let list = this.props.activity.map(a => <div key={a.id}>{a.message} <span className='timedate'>{moment(a.timestamp).fromNow()}</span></div>);
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>);
  }
}
ActivityList.propTypes = {
  activity: React.PropTypes.array.isRequired
};
