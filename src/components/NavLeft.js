import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/hammers.svg';
import facebook from '../assets/images/facebook-logo.svg';
import twitter from '../assets/images/twitter-logo.svg';
import '../assets/_nav.scss';

const NavLeft = () => (
  <div className='navLeft'>
    <img src={logo} alt='boilermake logo' className='hammers'/>
    <p className='rotate-text pink'>BoilerMake</p>
    <div className='social-container'>
      <NavLink exact to=""><img src={facebook} alt='facebook' className="icon"/></NavLink>
      <NavLink exact to=""><img src={twitter} alt='twitter' className='icon'/></NavLink>
    </div>
  </div>
);

export default NavLeft;
