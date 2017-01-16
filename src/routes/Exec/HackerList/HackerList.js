import React, { Component, PropTypes } from 'react';
import Reactable from 'reactable';
import { Link } from 'react-router';

export default class HackerList extends Component {
  componentDidMount () {
    this.props.loadData();
  }
  render () {
    const { Table, Th, Thead, Tr, Td } = Reactable;
    let tableBody;
    tableBody = this.props.exec.hackers === null
      ? null
      : this.props.exec.hackers.map(hacker =>
        <Tr key={hacker.id}>
          <Td column='id'><Link to={`/exec/users/${hacker.id}`}>{hacker.id}</Link></Td>
          <Td column='app_id'>{hacker.application.id}</Td>
          <Td column='first_name'>{hacker.first_name}</Td>
          <Td column='last_name'>{hacker.last_name}</Td>
          <Td column='email'>{hacker.email}</Td>
          <Td column='school_name'>{hacker.application.school ? hacker.application.school.name : ''}</Td>
          <Td column='application_status'>{hacker.application.completed}</Td>
          <Td column='decision'>{hacker.application.decision}</Td>
          <Td column='rsvp'>{hacker.application.rsvp}</Td>
        </Tr>);
    const cols = ['first_name', 'id', 'last_name', 'roles', 'school_name', 'application_status', 'decision', 'rsvp', 'email'];
    let table = this.props.exec.hackers !== null
      ? <Table className='table'
        itemsPerPage={20}
        pageButtonLimit={10}
        filterable={cols}
        sortable={cols}
        defaultSort={{ column: 'id', direction: 'asc' }} >
        <Thead>
          <Th column='id'><strong>user ID</strong></Th>
          <Th column='app_id'><strong>app ID</strong></Th>
          <Th column='first_name'><strong>First Name</strong></Th>
          <Th column='last_name'><strong>Last Name</strong></Th>
          <Th column='email'><strong>email</strong></Th>
          <Th column='school_name'><strong>School</strong></Th>
          <Th column='application_status'><strong>Application Completed?</strong></Th>
          <Th column='decision'><strong>decision</strong></Th>
          <Th column='rsvp'><strong>rsvp</strong></Th>
        </Thead>
        {tableBody}
      </Table>
      : '';
    return (<div style={{ backgroundColor: 'grey', padding: '10px' }}>
      {table}
      {/* <PrettyJSON data={this.props.exec.hackers}/> */}
      <button className='button-primary-wide' onClick={this.props.loadData}>Reload Data</button>
    </div>
    );
  }
}
