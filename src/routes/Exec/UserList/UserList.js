import React, { Component, PropTypes } from 'react';
import PrettyJSON from 'components/PrettyJSON';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Reactable from 'reactable';
import { Link } from 'react-router';

export default class UserSettings extends Component {
  componentDidMount () {
    this.props.loadData();
  }
  render () {
    const { Table, Th, Thead, Tr, Td } = Reactable;
    let tableBody;
    tableBody = this.props.exec.users === null
      ? null
      : this.props.exec.users.map(user =>
        <Tr key={user.id}>
          <Td column='id'><Link to={`/exec/users/${user.id}`}>{user.id}</Link></Td>
          <Td column='first_name'>{user.first_name}</Td>
          <Td column='last_name'>{user.last_name}</Td>
          <Td column='email'>{user.email}</Td>
          <Td column='roles'>{user.roles}</Td>
        </Tr>);

    let table = this.props.exec.users !== null
      ? <Table className='table'
        data={this.props.exec.users}
        itemsPerPage={20}
        pageButtonLimit={10}
        filterable={['first_name', 'id', 'last_name', 'roles']}
        sortable={['first_name', 'id', 'last_name', 'roles']}
        defaultSort={{ column: 'id', direction: 'asc' }} >
        <Thead>
          <Th column='id'><strong>User ID</strong></Th>
          <Th column='first_name'><strong>First Name</strong></Th>
          <Th column='last_name'><strong>Last Name</strong></Th>
          <Th column='email'><strong>email</strong></Th>
          <Th column='roles'><strong>Roles</strong></Th>
        </Thead>
        {tableBody}
      </Table>
      : null;
    return (<div style={{ backgroundColor: 'grey', padding: '10px' }}>
      {table}
      <button className='button-primary-wide' onClick={this.props.loadData}>Reload Data</button>
    </div>
    );
  }
}
