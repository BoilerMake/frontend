import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
export default class Homepage extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row className='show-grid'>
            <Col sm={6} md={6}>
              hi
            </Col>
          </Row>
        </Grid>

      </div>);
  }
}
