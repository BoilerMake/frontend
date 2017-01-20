import React, { Component, PropTypes } from 'react';
import PrettyJSON from 'components/PrettyJSON';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Reactable from 'reactable';

export default class UserSettings extends Component {
  componentDidMount () {
    this.props.loadData();
  }
  render () {
    const { Table, Th, Thead } = Reactable;
    let table = this.props.exec.users !== null
      ? <Table className='table'
        data={this.props.exec.users}
        itemsPerPage={20}
        pageButtonLimit={10}
        filterable={['first_name', 'id', 'last_name', 'roles']}
        sortable={['first_name', 'id', 'last_name', 'roles']}
        defaultSort={{ column: 'id', direction: 'asc' }} >
        <Thead>
          <Th column='id'><strong>ID</strong></Th>
          <Th column='first_name'><strong>First Name</strong></Th>
          <Th column='last_name'><strong>Last Name</strong></Th>
          <Th column='roles'><strong>Roles</strong></Th>
        </Thead>
      </Table>
      : null;
    return (<div style={{ backgroundColor: 'grey', padding: '10px' }}>
      {table}
      <button className='button-primary-wide' onClick={this.props.loadData}>Reload Data</button>
    </div>
    );
  }
}
