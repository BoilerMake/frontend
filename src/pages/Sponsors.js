import React from 'react';
import Header from '../components/Header';
import Stories from '../components/Home_Stories';
import HeaderImg from '../assets/images/sponsor.jpg';

import BB from '../assets/images/sponsors/bloomberg.svg';
import C1 from '../assets/images/sponsors/capital_one.svg';
import MDB from '../assets/images/sponsors/MongoDB.png';
import QC from '../assets/images/sponsors/Qualcomm.svg';
import MM from '../assets/images/sponsors/mixmax.svg';
import A from '../assets/images/sponsors/apple.png';
import G from '../assets/images/sponsors/google.png';
import MS from '../assets/images/sponsors/microsoft.png';
import SG from '../assets/images/sponsors/sendgrid.png';
import GE from '../assets/images/sponsors/ge.png';
import TO from '../assets/images/sponsors/twilio.png';
import WM from '../assets/images/sponsors/walmart.png';

const Sponsors = () => (
  <div>
    <Header img={HeaderImg} startColor="#F78CA0" endColor="#FE998B">
      <h1>Sponsor a weekend of ideas</h1>
      <h2>sponsorship@boilermake.org</h2>
    </Header>
    <div className="max-width home flex">
      <div className="col-8 paddingr">
        <h2>Foster a community of ideas</h2>
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
    <div className="middleBreak">
      <div className="max-width home">
        <h2 style={{ textAlign: 'center' }}>Put your name on the BoilerMake Legacy</h2>
        <div className="flex v-center h-center">
          <div className="col-3 padding">
            <img src={BB} width="100%" alt="Bloomberg"/>
          </div>
          <div className="col-3 padding">
            <img src={G} width="100%" alt="Google"/>
          </div>
          <div className="col-3 padding">
            <img src={C1} width="100%" alt="Capital One"/>
          </div>
          <div className="col-3 padding">
            <img src={MDB} width="100%" alt="MongoDB"/>
          </div>
          <div className="col-1 padding">
            <img src={MM} width="100%" alt="Mixmax"/>
          </div>
          <div className="col-3 padding">
            <img src={MS} width="100%" alt="Microsoft"/>
          </div>
          <div className="col-3 padding">
            <img src={SG} width="100%" alt="sendgrid"/>
          </div>
          <div className="col-3 padding">
            <img src={QC} width="100%" alt="Qualcomm"/>
          </div>
          <div className="col-1 padding">
            <img src={GE} width="100%" alt="GE"/>
          </div>
          <div className="col-3 padding">
            <img src={TO} width="100%" alt="Twilio"/>
          </div>
          <div className="col-3 padding">
            <img src={WM} width="100%" alt="Walmart"/>
          </div>
        </div>
      </div>
    </div>
    <div className="max-width home flex">
      <div className="col-8 paddingr">
        <h2>Additional Benefits</h2>
        <p>
          Gaining access to hackers’ resumes, emails, GitHubs, and LinkedIn profiles
          Awarding custom prizes based your criteria
          Promotion through giveaways and advertising
          Demonstrating your APIs and new technologies
          Reserving space for private events with hackers (tech talks, mentorship sessions, etc.)
        </p>
        <button>sponsorship@boilermake.org</button>
      </div>
    </div>
    <Stories />
  </div>
);

export default Sponsors;
