import React, { Component, PropTypes } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import './navbar.scss';
export default class Header extends Component {
  render () {
    return (
      <Navbar className='navbar navbar navbar-fixed-top navbar-default'>
        <div className='nav-background' />

        <div className='navbar-header'>

          <div className='nav navbar-nav'>
            <a>
              <img className='logo' src='/images/hammers-white.svg' />
            </a>
          </div>
          <div className='collapse navbar-collapse' id='collapsable-navbar'>
            <ul className='nav navbar-nav navbar-left'>

              { this.props.isLoggedIn ? <li> <a className='nav-element'>Profile</a> </li> : null }
              { this.props.isExec ? <NavDropdown eventKey={3} title='Exec' id='basic-nav-dropdown'>
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown> : null }
            </ul>

            <ul className='nav navbar-nav navbar-right'>
              { this.props.isLoggedIn ? <li><button onClick={this.props.logout}>Sign Out</button></li> : null }
            </ul>
          </div>
        </div>

      </Navbar>
    );
  }
}
