import React, { Component, PropTypes } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import './navbar.scss';
export default class Header extends Component {
  render () {
    return (
      <Navbar className='navbar-custom navbar-inverse'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>home</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.props.isAdmin
              ? <LinkContainer to='admin/users'>
                <NavItem>Users</NavItem>
              </LinkContainer>
              : ''}
          </Nav>
          <Nav pullRight>
            {
              this.props.isAuthenticated
                ? <NavDropdown eventKey={3} title={this.props.username} id='basic-nav-dropdown'>
                  <LinkContainer to='/settings'><MenuItem eventKey={3.1}>Settings</MenuItem></LinkContainer>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3} onClick={() => { this.props.logout(); }}>Log out</MenuItem>
                </NavDropdown>
                : <NavItem eventKey={4} onClick={() => { this.props.signin(); }}>Sign In</NavItem>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
