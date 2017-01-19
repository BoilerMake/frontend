import React, { Component, PropTypes } from 'react';
import PrettyJSON from 'components/PrettyJSON';
import HackerDecisionText from 'components/HackerDecisionText';
import { API_BASE_URL } from 'config';
import AnnouncementsForm from './AnnouncementsForm';
import AnnouncementsList from 'routes/Homepage/AnnouncementsList';
export default class Announcements extends Component {
  constructor (props) {
    super(props);
    this.state = { user: null };
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount () {
    this.props.loadAnnouncements();
  }

  handleSubmit = (values) => {
    console.log(values);
    this.props.addAnnouncement(values);
  };
  // loadData () {
  //   let userId = this.props.user_id;
  //   let token = this.props.token;
  //   let _this = this;
  //
  //   fetch(`${API_BASE_URL}/execs/users/${userId}/view?token=${token}`)
  //     .then((response) => response.json())
  //     .then((json) => { _this.setState({ user: json }); });
  // }
  render () {
    let announcements = this.props.list;

    return (
      <div className='container' >
        <div className='row'>
          <div className='col-md-6'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>Current Announcements</h3>
              </div>
              <div className='panel-body'>
                <AnnouncementsList announcements={announcements} />
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>New Announcement</h3>
              </div>
              <div className='panel-body'>
                <AnnouncementsForm onSubmit={this.handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}
