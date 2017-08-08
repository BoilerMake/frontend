import React from 'react';
import sign from '../assets/images/animation/logo-sign.svg';
import pillars from '../assets/images/animation/pillars.svg';
import '../assets/pillars.scss';

const Animation = () => (
  <div className='animation'>
  <img className="sign" src={sign} alt="logo-sign" />
  <div className="register">
    <h3>Purdue University • September 29 - October 1, 2017</h3>
    <button className="btn">register</button>
  </div>
  <img className="pillars" src={pillars} alt="pillars" />
  </div>
);

export default Animation;
