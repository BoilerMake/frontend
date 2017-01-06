import React, { Component, PropTypes } from 'react';
import PrettyJSON from 'components/PrettyJSON';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Reactable from 'reactable';

export default class UserSettings extends Component {
  componentDidMount () {
    this.props.loadData();
  }
  render () {
    const options = {
      page: 0,  // which page you want to show as default
      // sizePerPageList: [ {
      //   text: '5', value: 5
      // }, {
      //   text: '10', value: 10
      // }, {
      //   text: 'All', value: 100
      // } ], // you can change the dropdown list for size per page
      sizePerPage: 15,  // which size per page you want to locate as default
      pageStartIndex: 0, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
      // prePage: 'Prev', // Previous page button text
      // nextPage: 'Next', // Next page button text
      // firstPage: 'First', // First page button text
      // lastPage: 'Last', // Last page button text
      paginationShowsTotal: true  // Accept bool or function
      // hideSizePerPage: true > You can hide the dropdown for sizePerPage
    };

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
      // <BootstrapTable data={this.props.exec.users} striped={false} hover={false} pagination={ true} options = {options}>
      //   <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true} filter={ { type: 'TextFilter', delay: 300 } }>ID</TableHeaderColumn>
      //   <TableHeaderColumn dataField="first_name" dataSort={true} filter={ { type: 'TextFilter', delay: 300 } }>First Name</TableHeaderColumn>
      //   <TableHeaderColumn dataField="last_name" dataSort={true} filter={ { type: 'TextFilter', delay: 300 } }>Last Name</TableHeaderColumn>
      //   <TableHeaderColumn dataField="roles" dataSort={true} filter={ { type: 'TextFilter', delay: 300 } }>Roles</TableHeaderColumn>
      // </BootstrapTable>
      : null;
    return (<div style={{ backgroundColor: 'grey', padding: '10px' }}>
      {table}
      <button className='button-primary-wide' onClick={this.props.loadData}>Reload Data</button>
    </div>
    );
  }
}
