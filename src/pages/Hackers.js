import React from 'react';
import Header from '../components/Header';
import HeaderImg from '../assets/images/hacker.jpg';

const Hackers = () => (
  <div>
    <Header img={HeaderImg} startColor="#f25f89" endColor="#9a96f2">
      <h1>A Weekend Full of Hacking</h1>
      <h2>36 Hours of Hacking at Purdue University</h2>
    </Header>
    <div className="max-width home flex">
      <div className="col-8 paddingr">
        <h2>Create amazing things</h2>
        <p>
          We would like to extend the opportunity for your company to be an essential part of
          the BoilerMake experience. Sponsors get access to a driven community of 500 highly
          motivated university students with new ideas that could be a beneficial part of your
          workplace. You’ll be able to tap this pool of talent to find qualified job and internship
          candidates and see them work as a team in a real-world setting. Interacting with
          students during the hackathon also allows you to promote your company’s new
          technologies to be used and explored.
        </p>
      </div>
    </div>
    <div className="max-width home flex">
      <div className="col-8 paddingr">
        <h2>Meet your new best friends</h2>
        <p>
          We would like to extend the opportunity for your company to be an essential part of
          the BoilerMake experience. Sponsors get access to a driven community of 500 highly
          motivated university students with new ideas that could be a beneficial part of your
          workplace. You’ll be able to tap this pool of talent to find qualified job and internship
          candidates and see them work as a team in a real-world setting. Interacting with
          students during the hackathon also allows you to promote your company’s new
          technologies to be used and explored.
        </p>
      </div>
    </div>
    <div className="max-width home flex">
      <div className="col-8 paddingr">
        <h2>Meet industry-leading sponsors</h2>
        <p>
          We would like to extend the opportunity for your company to be an essential part of
          the BoilerMake experience. Sponsors get access to a driven community of 500 highly
          motivated university students with new ideas that could be a beneficial part of your
          workplace. You’ll be able to tap this pool of talent to find qualified job and internship
          candidates and see them work as a team in a real-world setting. Interacting with
          students during the hackathon also allows you to promote your company’s new
          technologies to be used and explored.
        </p>
      </div>
    </div>
  </div>
);

export default Hackers;
