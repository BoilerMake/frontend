import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer">
      <div className="col-3">
        <h4>Social</h4>
        <ul>
          <li><a href="https://www.facebook.com/BoilerMake/">Facebook</a></li>
          <li><a href="https://www.instagram.com/boilermake/">Instagram</a></li>
          <li><a href="https://www.twitter.com/boilermake1/">Twitter</a></li>
        </ul>
      </div>
      <div className="col-3">
        <h4>Pages</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hackers">For Hackers</Link></li>
          <li><Link to="/sponsors">For Sponsors</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
