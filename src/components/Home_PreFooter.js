import React from 'react';
import {Link} from 'react-router-dom';
// import HeaderImg from '../assets/images/hacker.jpg';

const PreFooter = () => (
  <div className="flex">
    <div className="col-6 colorBlock pink">
      <div className="max-width flex">
        <div className="col-8 home">
          <h2>Make Something Awesome</h2>
          <p>
            BoilerMake provides the opportunity for 500 hackers, every year, to
            explore and create new ideas.
          </p>
          <Link to="/hackers"><button>Read More</button></Link>
        </div>
        <div className="col-4">

        </div>
      </div>
    </div>
    <div className="colorBlock col-6 orange">
      <div className="max-width flex">
        <div className="col-8 home">
          <h2>Sponsor an Awesome Weekend</h2>
          <p>
            Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit amit.
          </p>
          <Link to="/sponsors"><button>Read More</button></Link>
        </div>
        <div className="col-4">

        </div>
      </div>
    </div>
  </div>
);

export default PreFooter;
