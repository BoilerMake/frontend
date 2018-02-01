import React from 'react';
import Header from '../components/Header';
import HeaderImg from '../assets/images/home.jpg';
const Home = () => (
  <div>
    <Header img={HeaderImg} startColor="#9bf0e1" endColor="#50a4f7">
      <h1>Forge The Future</h1>
      <h2>36 Hours of Hacking at Purdue University</h2>
    </Header>
  </div>
);

export default Home;
