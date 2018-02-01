import React from 'react';
import Header from '../components/Header';
import HeaderImg from '../assets/images/home.jpg';
const Home = () => (
  <div>
    <Header img={HeaderImg} startColor="#9bf0e1" endColor="#50a4f7">
      <h1>Forge The Future</h1>
      <h2>36 Hours of Hacking at Purdue University</h2>
    </Header>
    <div className="max-width home">
      <div className="col-6">
        <h2>Hype Header</h2>
        <p>
          Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum
          solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit
          amit. Lorem ipsum solor sit amit.
        </p>
      </div>
    </div>
    <div className="max-width home" style={{margin: '50px auto'}}>
      <h2 style={{textAlign: 'center'}}>Here's a heading to make us seem profound</h2>
      <div className="flex">
        <div className="col-3"/>
        <div className="col-4" style={{textAlign: 'right'}}>
          <h3>Highlight some cool things</h3>
          <p>
            Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum
            solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit
            amit. Lorem ipsum solor sit amit.
          </p>
          <h3>Highlight some cool things</h3>
          <p>
            Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum
            solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit
            amit. Lorem ipsum solor sit amit.
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>

    <div className="colorBlock pink">
      <div className="max-width flex">
        <div className="col-8 home">
          <h2>Make Something Awesome</h2>
          <p>
            Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum
            solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit
            amit. Lorem ipsum solor sit amit.
          </p>
        </div>
        <div className="col-4">

        </div>
      </div>
    </div>
    <div className="colorBlock orange">
      <div className="max-width flex">
        <div className="col-8 home">
          <h2>Sponsor an Awesome Weekend</h2>
          <p>
            Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit amit.
          </p>
        </div>
        <div className="col-4">

        </div>
      </div>
    </div>
  </div>
);

export default Home;
