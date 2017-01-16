import React, { Component, PropTypes } from 'react';
import PrettyJSON from 'components/PrettyJSON';
import HackerDecisionText from 'components/HackerDecisionText';
import { API_BASE_URL } from 'config';

export default class UserDetail extends Component {
  constructor (props) {
    super(props);
    this.state = { user: null };
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount () {
    this.loadData();
  }
  loadData () {
    let userId = this.props.user_id;
    let token = this.props.token;
    let _this = this;

    fetch(`${API_BASE_URL}/execs/users/${userId}/view?token=${token}`)
      .then((response) => response.json())
      .then((json) => { _this.setState({ user: json }); });
  }
  render () {
    let user = this.state.user;

    let loading = this.state.user === null;

    let hackerInfo =
      loading || !user.isHacker
        ? ''
        : (<div>
          <p><a>View Application</a></p>
          <p><strong>Application Complete?</strong>: {user.application.completed ? 'yes' : 'no'}</p>
          <p><strong>Application Decision</strong>: <HackerDecisionText decision={user.application.decision} /></p>
          <p><strong>Application RSVP</strong>: {user.application.rsvp}</p>
          <p><strong>School</strong>: {user.application.school ? user.application.school.name : 'n/a'}</p>
        </div>);

    let userInfo =
      loading
        ? ''
        : (<div>
          <p><strong>Name</strong>: {user.user.first_name} {user.user.last_name}</p>
          <p><strong>Phone</strong>: {user.user.phone}</p>
          <p><strong>Email</strong>: {user.user.email}</p>
          <p><strong>User Last Changed</strong>: {user.user.updated_at}</p>
          <p><strong>Roles</strong>: {user.roles.join(', ')}</p>
        </div>);

    return (
      <div className='container' >
        <div className='row'>
          <div className='col-md-6'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>User Profile</h3>
              </div>
              <div className='panel-body'>
                {userInfo}
                <hr />
                {hackerInfo}
                <PrettyJSON data={this.state.user} />
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>Actions</h3>
              </div>
              <div className='panel-body'>
                todo
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}
