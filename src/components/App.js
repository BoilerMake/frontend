import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  componentWillMount () {
    if (this.props.isAuthenticated) {
      document.getElementById('body').className = 'bodyPad';
    }
  }
  componentWillUnmount () {
    document.getElementById('body').className = '';
  }
  render () {
    return (
      <div className='main-app'>
        {this.props.children}
      </div>
    );
  }
}
