import React, { Component, PropTypes } from 'react';
import AccessCardList from './AccessCardList';
export default class AccessCard extends Component {
  constructor (props) {
    super(props);
    this.state = { searchValue: '', code: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount () {
    this.props.loadData();
  }
  handleChange (event) {
    this.setState({ searchValue: event.target.value });
  }
  doSomething = (e) => {
    e.preventDefault();
    this.setState(
      {
        ...this.state,
        code: this.state.searchValue,
        searchValue: ''
      });
  };

  render () {
    const maxLen = 10;
    let hackers = this.props.exec.hackers ? this.props.exec.hackers : [];
    let filteredHackers = this.state.code === ''
      ? hackers
      : hackers.filter((elem, index, array) => elem.card_code ? elem.card_code === this.state.code : false);

    let shortenedHackers = filteredHackers.slice(0, maxLen);
    return (<div style={{ backgroundColor: '#F3F8FB', padding: '10px' }}>
      <div className='center-block AccessCardList'>
        <h2>Hacker Access Card Lookup</h2>
        <hr />
        <div className='row'>
          <div className='col-md-6'>
            <form onSubmit={this.doSomething}>
              <input type='text' placeholder='type name, school, ID' value={this.state.searchValue} onChange={this.handleChange} />
              <button type='submit'>Click me</button>
            </form>
            <br />
            <small>showing {filteredHackers.length <= maxLen ? filteredHackers.length : maxLen} out of {filteredHackers.length}</small>
          </div>
          <div className='col-md-6'>
            <button className='button-primary-wide' onClick={this.props.loadData}>Reload Data</button>
          </div>

        </div>
        <AccessCardList hackers={shortenedHackers} />
      </div>
    </div>
    );
  }
}
