import React, { Component, PropTypes } from 'react';
import PrettyJSON from './PrettyJSON';
export default class UserSettings extends Component {
  render () {
    return (<div>
      nothing to see here yet :)
       <PrettyJSON data={this.props.user}/>
       <button className="button-primary-wide" onClick={this.props.loadData}>Reload Data</button>
    </div>);
  }
}
