import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/hammers.svg';
import facebook from '../assets/images/facebook-logo.svg';
import twitter from '../assets/images/twitter-logo.svg';
import '../assets/_nav.scss';

class NavLeft extends Component {
  render () {
    return (
      <div className='navLeft'>
        <img src={logo} alt='boilermake logo' className='hammers'/>
        <p className='rotate-text pink'>BoilerMake</p>
        <div className='social-container'>
          <a href=''><img src={facebook} alt='facebook' className="icon"/></a>
          <a href=''><img src={twitter} alt='twitter' className='icon'/></a>
        </div>
      </div>
    );
  }
}

export default NavLeft;
