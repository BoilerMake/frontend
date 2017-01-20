import React, { Component, PropTypes } from 'react';
export default class EventListItem extends Component {
  constructor (props) {
    super(props);
    this.state = { collapsed: this.props.hide };
    this.toggle = this.toggle.bind(this);
  }
  toggle () {
    this.setState({ collapsed: !this.state.collapsed });
  }
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
        <h3 className='active' onClick={this.toggle}>{this.props.title}</h3>
        {this.state.collapsed ? '' : list}
      </div>);
  }
}
EventListItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  events: React.PropTypes.array.isRequired
};
