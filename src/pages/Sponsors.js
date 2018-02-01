import React from 'react';
import Header from '../components/Header';
import HeaderImg from '../assets/images/sponsor.jpg';

const Sponsors = () => (
  <Header img={HeaderImg} startColor="#ffe480" endColor="#ff8742">
    <h1>Sponsor a weekend of ideas</h1>
    <h2>team@boilermake.org</h2>
  </Header>
);

export default Sponsors;
