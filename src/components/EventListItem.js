import React, { Component, PropTypes } from 'react';
export default class EventListItem extends Component {
  render () {
    let list = this.props.events.map(event => <div className='event' key={'evt' + event.id}>
      <p className='time'>
        {event.begin.format('h:mmA') === event.end.format('h:mmA')
          ? event.begin.format('h:mmA')
          : `${event.begin.format('h:mm')} - ${event.end.format('h:mmA')}`}
      </p>
      <p className='title'>
        {event.title}
      </p>
    </div>
    );
    return (
      <div className='events'>
        <h3 className='active'>{this.props.title}</h3>
        {list}
      </div>);
  }
}
EventListItem.propTypes = {
  title: React.PropTypes.isRequired,
  events: React.PropTypes.isRequired
};
