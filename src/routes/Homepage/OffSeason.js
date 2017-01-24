import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import PrettyJSON from '../../components/PrettyJSON';
import EventListItem from './EventListItem';
import AnnouncementsList from './AnnouncementsList';
import ActivityList from './ActivityList';
import moment from 'moment';

import Countdown from './Countdown';
export default class OffSeason extends Component {
  componentDidMount = () => {
  };

  render () {
    return (
      <div>
        <Grid fluid>
          <Row className='show-grid'>
            <div className='overlay' />
            <Col sm={12} md={12} lg={12}>

              <h1>Thanks for a great BoilerMake IV!</h1>
              <p className='OffSeason_text-center'>
                <br /><div className='OffSeason_number'>36</div> hours
                <br /><div className='OffSeason_number'>222,000</div> sq ft

                <br /><div className='OffSeason_number'>19</div> schools
                <br /><div className='OffSeason_number'>14</div> partners
                <br /><div className='OffSeason_number'>500+</div> hackers
                <br /><div className='OffSeason_number'>100+</div> volunteers

                <br /><div className='OffSeason_number'>1800</div> chocolates
                <br /><div className='OffSeason_number'>1050</div> cans of coke

                <br /><div className='OffSeason_number'>65</div> gallons of milk
                <br /><div className='OffSeason_number'>52</div> lbs of coffee beans
                <br /><div className='OffSeason_number'>2000</div> cups of coffee and espresso

                <br /><div className='OffSeason_number'>2000+</div> github commits on <div className='OffSeason_number'>200+</div> public repos

                <br /><div className='OffSeason_number'>104</div> devpost submissions

                <br />

                <a style={{ color: 'white' }} href='https://www.facebook.com/media/set/?set=a.799429926862759.1073741835.235489296590161&type=1&l=e4d7a2cd2a'
                  target='_blank'>
                  View Photos
                </a>
                &nbsp;|&nbsp;
                <a style={{ color: 'white' }} href='https://www.facebook.com/BoilerMake/'
                  target='_blank'>
                  Follow us
                </a>
              </p>

              <div className='OffSeason_logo-center'>
                <img height='200px' src='/images/space.png' />
              </div>

            </Col>
          </Row>

        </Grid>

      </div>);
  }
}
