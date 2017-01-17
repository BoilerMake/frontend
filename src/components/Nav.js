import React, { Component, PropTypes } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Router, Route, Link, browserHistory } from 'react-router';
import './navbar.scss';
export default class Header extends Component {
  render () {
    return (
      this.props.isExec
        ? <Navbar className='navbar navbar navbar-fixed-top navbar-default'>
          <div className='nav-background' />

          <div className='navbar-header'>

            <div className='nav navbar-nav'>
              <Link to='/'>
                <img className='logo' src='/images/hammers-white.svg' />
              </Link>
            </div>
            <div className='collapse navbar-collapse' id='collapsable-navbar'>
              <ul className='nav navbar-nav navbar-left'>

                {/* { this.props.isLoggedIn ? <li> <Link className='nav-element' to='/settings'>Profile</Link> </li> : null } */}
                { this.props.isExec ? <NavDropdown eventKey={3} title='Exec' id='basic-nav-dropdown'>
                  <LinkContainer to='/exec/hackers'><MenuItem eventKey={3.1}>Hackers</MenuItem></LinkContainer>
                  <LinkContainer to='/exec/users'><MenuItem eventKey={3.2}>Users</MenuItem></LinkContainer>
                  <LinkContainer to='/exec/checkin'><MenuItem eventKey={3.3}>Check In</MenuItem></LinkContainer>
                  <LinkContainer to='/exec/emailstosend'><MenuItem eventKey={3.4}>Emails To Send</MenuItem></LinkContainer>
                </NavDropdown> : null }
                { this.props.isSponsor ? <li> <Link className='nav-element' to='/sponsorportal'>Sponsor Portal</Link> </li> : null }

              </ul>

              <Nav pullRight>
                {
                this.props.isLoggedIn
                  ? <NavDropdown eventKey={3} title={'hi'} id='basic-nav-dropdown'>
                    {/* <LinkContainer to='/settings'><MenuItem eventKey={3.1}>Settings</MenuItem></LinkContainer> */}
                    <MenuItem divider />
                    <MenuItem eventKey={3.3} onClick={() => { this.props.logout(); }}>Log out</MenuItem>
                  </NavDropdown>
                  : ''
              }
              </Nav>
            </div>
          </div>

        </Navbar>
        : <div />
    );
  }
}
