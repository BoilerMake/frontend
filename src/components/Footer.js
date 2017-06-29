import React from 'react';
import { NavLink } from 'react-router';
import facebook from '../assets/images/facebook-logo.svg';
import twitter from '../assets/images/twitter-logo.svg';

const Footer = () => (
  <div className="footer bgdarkBlue flex-con">
  lol
    <div className="flex-child">
      <img src={facebook} />
    </div>
    <div className="flex-child">
      <img src={twitter} />
    </div>
    <div className="flex-child">
    </div>

  </div>
);
export default Footer;
