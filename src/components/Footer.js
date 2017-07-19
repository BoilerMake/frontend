import React from 'react';
import { NavLink } from 'react-router';
import facebook from '../assets/images/facebook-logo.svg';
import twitter from '../assets/images/twitter-logo.svg';

const Footer = () => (
  <div className="footer">
    <div className="flex-con">
      <img src={facebook} />
      <img src={twitter} />
    </div>
    <p>Copyright © 2017 BoilerMake</p>
  </div>
);
export default Footer;
