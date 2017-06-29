import React from 'react';
import Interest from '../components/InterestSignupForm';
import B from '../assets/images/b.png';

const Landing = () => (
  <div className="page bgdarkBlue">
      <div className="con flexCon">
          <div className="flexchild">
              <h1 className="white">BoilerMake</h1>
              <h3 className="pink">Purdue University</h3>
              <h3 className="lightBlue">SEPT 29  - OCT 1 2017</h3>
              <Interest/>
          </div>
          <div className="flexchild">
              <img src={B} alt="boilermakev-logo" />
          </div>
      </div>
  </div>
);

export default Landing;
