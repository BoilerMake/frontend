import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import PrettyJSON from './PrettyJSON';
export default class Homepage extends Component {
  loadData = () => {
    this.props.loadEvents();
  };
  componentDidMount = () => {
    this.loadData();
    setInterval(() => { this.loadData(); }, 10000);
  };

  render () {
    return (
      <div>
        <Grid>
          <Row className='show-grid'>
            <Col sm={6} md={6}>
              hi
              <hr />
              <button onClick={this.loadData}>Reload Data</button>
              <PrettyJSON data={this.props.events} />
            </Col>
          </Row>
        </Grid>

      </div>);
  }
}
