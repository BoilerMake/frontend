import React, { Component, PropTypes } from 'react';
export default class EventListItem extends Component {
  render () {
    let list = this.props.events.map(event => <div>
      <p>
        {event.begin.format('h:mmA') === event.end.format('h:mmA')
          ? event.begin.format('h:mmA')
          : `${event.begin.format('h:mm')} - ${event.end.format('h:mmA')}`}
      </p>
      <p>
        {event.title}
      </p>
      <br/>
    </div>
    );
    return (
      <div>
        <h3>{this.props.title}</h3>
        {list}
      </div>);
  }
}
EventListItem.propTypes = {
  title: React.PropTypes.isRequired,
  events: React.PropTypes.isRequired
};
