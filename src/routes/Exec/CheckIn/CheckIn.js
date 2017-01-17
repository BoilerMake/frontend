import React, { Component, PropTypes } from 'react';
import CheckInList from './CheckInList';
export default class CheckIn extends Component {
  constructor (props) {
    super(props);
    this.state = { searchValue: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount () {
    this.props.loadData();
  }
  handleChange (event) {
    this.setState({ searchValue: event.target.value });
  }

  render () {
    const maxLen = 10;
    let hackers = this.props.exec.hackers;
    let filteredHackers = this.state.searchValue === ''
      ? hackers
      : hackers.filter((elem, index, array) => {
        const searchVal = this.state.searchValue.toLowerCase();
        return elem.first_name.toLowerCase().includes(searchVal)
          || elem.last_name.toLowerCase().includes(searchVal)
          || elem.launch.toLowerCase().includes(searchVal)
          || String(elem.id).includes(searchVal)
          || (elem.application.school ? elem.application.school.name.toLowerCase().includes(searchVal) : false);
      }
    );

    let shortenedHackers = filteredHackers.slice(0, maxLen);
    return (<div style={{ backgroundColor: '#F3F8FB', padding: '10px' }}>
      <div className='center-block CheckInList'>
        <h2>Hacker Check In</h2>
        <hr />
        <div className='row'>
          <div className='col-md-6'>
            <input type='text' placeholder='type name, school, ID' value={this.state.searchValue} onChange={this.handleChange} />
            <br />
            <small>showing {filteredHackers.length <= maxLen ? filteredHackers.length : maxLen} out of {filteredHackers.length}</small>
          </div>
          <div className='col-md-6'>
            <button className='button-primary-wide' onClick={this.props.loadData}>Reload Data</button>
          </div>

        </div>
        <CheckInList hackers={shortenedHackers} checkIn={this.props.checkIn} />
      </div>
    </div>
    );
  }
}
