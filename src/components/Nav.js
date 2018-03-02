import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/hammers.svg';

class Nav extends Component {
  render() {
    return (
      <div className="max-width">
        <div className="navContainer">
          <div className="navLogo">
            <Link to="/"><img src={logo} alt="BoilerMake logo" className="hammers"/></Link>
          </div>
          <nav className="navLinks">
            <NavLink exact to='/hackers' className='navLink'>Hackers</NavLink>
            <NavLink exact to='/sponsors' className='navLink'>Sponsors</NavLink>
            <NavLink exact to='/about' className='navLink'>About</NavLink>
            <NavLink exact to='/faq' className='navLink'>FAQ</NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
