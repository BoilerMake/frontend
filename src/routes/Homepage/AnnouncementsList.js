import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class AnnouncementsList extends Component {
  render () {
    let list = this.props.announcements.map(a => <li key={a.id} className={a.important ? 'important' : ''}>{a.body}<br /><span className='timedate'>{moment(a.created_at).fromNow()}</span></li>);
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>);
  }
}
AnnouncementsList.propTypes = {
  announcements: React.PropTypes.array.isRequired
};
