import React from 'react';
import Interest from '../components/InterestSignupForm';
import B from '../assets/images/b.png';

const Landing = () => (
    <div className="page bgdarkBlue">
        <div className="fullWidthContainer">
            <div className="flex v-center h-center">
                <div className="flexchild">
                    <h1 className="title white">BoilerMake</h1>
                    <h3 className="title pink">Purdue University</h3>
                    <h3 className="title lightBlue">SEPT 29  - OCT 1 2017</h3>
                    <Interest/>
                </div>
                <div className="flexchild">
                    <img src={B} alt="boilermakev-logo" className="landing-logo"/>
                </div>
            </div>
        </div>
    </div>
);

export default Landing;
