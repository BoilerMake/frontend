import React from 'react';
import sign from '../assets/images/animation/logo-sign.svg';
import pillars from '../assets/images/animation/pillars.svg';
import '../assets/pillars.scss';

const Animation = () => (
  <div className='animation'>
  <img className="sign" src={sign} alt="logo-sign" />
  <img className="pillars" src={pillars} alt="pillars" />
  </div>
);

export default Animation;
