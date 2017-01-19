import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import PrettyJSON from '../../components/PrettyJSON';
import EventListItem from './EventListItem';
import AnnouncementsList from './AnnouncementsList';
import moment from 'moment';

import Countdown from './Countdown';
export default class Homepage extends Component {
  loadData = () => {
    this.props.loadEvents();
    this.props.loadAnnouncements();
  };
  componentDidMount = () => {
    this.loadData();
    setInterval(() => { this.loadData(); }, 10000);
  };

  render () {
    let announcementsList = this.props.announcements.announcements ? this.props.announcements.announcements : [];
    let eventList = this.props.events.events === null
      ? null
      : this.props.events.events.map(event => ({
        ...event,
        begin: moment(event.begin),
        end: moment(event.end),
        day: moment(event.begin).day()
      }));

    let fri = eventList ? eventList.filter(event => event.day === 5) : [];
    let sat = eventList ? eventList.filter(event => event.day === 6) : [];
    let sun = eventList ? eventList.filter(event => event.day === 0) : [];

    return (
      <div>
        <Grid fluid>
          <Row className='show-grid'>
            <div className='overlay' />
            <Col sm={12} md={12} lg={12}>
              <div>
                <h1>BoilerMake IV</h1>
              </div>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <div className='homepage-well'>
                <p className='homepage-well__title'>Schedule</p>
                <hr />
                {/* <button onClick={this.loadData}>Reload Data</button> */}
                <EventListItem title='Friday, Jan 20' events={fri} />
                <EventListItem title='Saturday, Jan 21' events={sat} />
                <EventListItem title='Sunday, Jan 22' events={sun} />
                {/* <PrettyJSON data={eventList} /> */}
              </div>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <div className='homepage-well'>
                <p className='homepage-well__title'>General Info</p>
                <hr />
                <h4><Countdown date={new Date('2017/01/20 21:30:00')} label='until hacking begins' /></h4>
                <hr />
                <p className='homepage-well__title'>BoilerMake III Photos</p>
                <iframe src='https://www.nicky.photos/frame/slideshow?key=NTLPBm&autoStart=1&captions=0&navigation=1&playButton=0&randomize=1&speed=3&transition=fade&transitionSpeed=2' width='100%' height='400' frameBorder='no' scrolling='no' />
                <p className='homepage-well__title'>Event Map</p>
                <h4>coming soon :)</h4>
                <hr />

              </div>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <div className='homepage-well'>
                <p className='homepage-well__title'>Announcements</p>
                <hr />
                <AnnouncementsList announcements={announcementsList} />
                <p className='homepage-well__title'>Help</p>
                <hr />
                <p>Wifi: <b>BoilerMake5</b> or <b>BoilerMake24</b>, password is boilermake2017</p>
                <p>Slack: <a href='https://boilermake4.slack.com' target='_blank'>boilermake2017.slack.com</a> (<a href='https://invite.boilermake.org' target='_blank'>Get an invite to slack</a>) </p>
                <p>Messenger: <a href='https://www.messenger.com/t/boilermake' target='_blank'>boilermake</a> </p>
                <p>Email: <a href='mailto:team@boilermake.org'>team@boilermake.org</a></p>
                <hr />
                <p>We will be offering complimentary showers and towels during the following timeframes:
                  Friday till midnight, Saturday from 8am-midnight, and after 10am on Sunday.</p>
              </div>
            </Col>
          </Row>
        </Grid>

      </div>);
  }
}
