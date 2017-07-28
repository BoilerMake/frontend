import React from 'react';
import Interest from '../components/InterestSignupForm';
import B from '../assets/images/b.png';

const Landing = () => (
    <div className="page bgdarkBlue">
        <div className="max-width">
            <div className="row">
                <div className="col-6">
                    <h1 className="white title">BoilerMake</h1>
                    <h3 className="pink title">Purdue University</h3>
                    <h3 className="lightBlue title">SEPT 29  - OCT 1 2017</h3>
                    <Interest/>
                </div>
                <div className="col-6">
                    <img src={B} alt="boilermakev-logo" style={ { 'max-width': '400px' } } />
                </div>
            </div>
        </div>
    </div>
);

export default Landing;
