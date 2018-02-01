import React from 'react';
import Header from '../components/Header';
import HeaderImg from '../assets/images/hacker.jpg';

const Hackers = () => (
  <Header img={HeaderImg} startColor="#f25f89" endColor="#9a96f2">
    <h1>A Weekend Full of Hacking</h1>
    <h2>36 Hours of Hacking at Purdue University</h2>
  </Header>
);

export default Hackers;
