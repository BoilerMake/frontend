import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import PrettyJSON from './PrettyJSON';
import EventListItem from './EventListItem';
import moment from 'moment';

import Countdown from './Countdown';
export default class Homepage extends Component {
  loadData = () => {
    this.props.loadEvents();
  };
  componentDidMount = () => {
    this.loadData();
    setInterval(() => { this.loadData(); }, 10000);
  };

  render () {
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
        <Grid fluid='fluid'>
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
                <h4><Countdown date={new Date('2017/01/20 17:00:00')} label='until hacking begins' /></h4>
                <hr />
                <p className='homepage-well__title'>Event Map</p>
                <hr />

              </div>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <div className='homepage-well'>
                <p className='homepage-well__title'>Announcements</p>
                <hr />
                <ul>
                  <li className='important'>This is an announcement. Lorem ipsum boilermake bake me a cake. This one has div class of important<br /><span className='timedate'>5 mins ago</span></li>
                  <li>This is an announcement.</li>
                  <li>This is an announcement.</li>
                </ul>
                <p className='homepage-well__title'>Help</p>
                <hr />
                <p>Wifi: BoilerMake | TBD</p>
                <p>Slack: <a href='https://boilermake2017.slack.com' target='_blank'>boilermake2017.slack.com</a> </p>
                <p>Messenger: <a href='https://www.messenger.com/t/boilermake' target='_blank'>boilermake</a> </p>
                <p>Email: <a href='mailto:team@boilermake.org'>team@boilermake.org</a></p>
              </div>
            </Col>
          </Row>
        </Grid>

      </div>);
  }
}
