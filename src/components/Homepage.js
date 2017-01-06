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

    let fri = eventList.filter(event => event.day === 5);
    let sat = eventList.filter(event => event.day === 6);
    let sun = eventList.filter(event => event.day === 0);

    return (
      <div>
        <Grid fluid='fluid'>
          <Row className='show-grid'>
            <Col sm={3} md={3} lg={3}>
              <div className='homepage-well'>
                <p className='homepage-well__title'>Schedule</p>
                <hr />
                {/*<button onClick={this.loadData}>Reload Data</button>*/}
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
                <h4><Countdown date={new Date("2017/01/20 17:00:00")} label="until hacking begins"/></h4>
                <hr/>
                <p className='homepage-well__title'>BoilerMake III photos</p>
                <iframe src='http://www.nicky.photos/frame/slideshow?key=NTLPBm&autoStart=1&captions=0&navigation=1&playButton=0&randomize=1&speed=3&transition=fade&transitionSpeed=2' width='100%' height='400' frameBorder='no' scrolling='no' />
              </div>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <div className='homepage-well'>
                <p className='homepage-well__title'>Help</p>
                <hr />
                <p>Wifi: BoilerMake | TBD</p>
                <p>Slack: <a href='https://boilermake2017.slack.com' target='_blank'>boilermake2017.slack.com</a> </p>
                <p><a href='https://www.messenger.com/t/boilermake' target='_blank'>Message us on facebook!</a> </p>
                <p>team@boilermake.org</p>
              </div>
            </Col>
          </Row>
        </Grid>

      </div>);
  }
}
