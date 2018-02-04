import React from 'react';
import Header from '../components/Header';
// import HeaderImg from '../assets/images/cover.jpg';
import Img1 from '../assets/images/boilermake-logo-neon.png';
import { Link } from 'react-router-dom';
import HeaderImg from '../assets/images/hacker.jpg';

import BigB from '../assets/images/b.svg';
const Home = () => (
  <div>
    {/* <Header img={HeaderImg} startColor="#9bf0e1" endColor="#50a4f7">
      <h1>Forge The Future</h1>
      <h2>36 Hours of Hacking at Purdue University</h2>
    </Header> */}
    <Header img={HeaderImg} startColor="#f25f89" endColor="#9a96f2">
      <h1>Forge the Future</h1>
      <h2>36 Hours of Hacking at Purdue University</h2>
    </Header>
    <div className="max-width home flex">
      <div className="col-8 paddingr">
        <h2>Hype Header</h2>
        <p>
          Lorem ipsum dolor amet cred schlitz street art meditation kombucha
          readymade, plaid 3 wolf moon skateboard taiyaki keytar. Pabst fam
          farm-to-table hell of live-edge letterpress. Pinterest scenester
          cornhole, DIY microdosing fashion axe prism green juice lumbersexual.
          Letterpress organic master cleanse helvetica, polaroid gastropub yr
          thundercats XOXO hexagon schlitz jean shorts bicycle rights shoreditch.
        </p>
        <p>
          La croix man braid enamel pin, seitan messenger bag hoodie church-key
          vaporware live-edge. Normcore franzen tofu cornhole. Vape literally
          swag drinking vinegar messenger bag godard. Butcher bitters before
          they sold out, plaid keytar letterpress narwhal. Chillwave craft beer
          subway tile, mixtape squid next level activated charcoal keytar
          thundercats farm-to-table cred hammock franzen.
        </p>
      </div>
    </div>
    <div className="middleBreak">
      <div className="max-width home">
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
          <div className="col-2" style={{textAlign: 'center', justifyContent: 'center', display: 'flex'}}>
            <img src={BigB} width="90%" alt="Illustration"/>
          </div>
        </div>
      </div>
    </div>

    <div className="max-width home" style={{margin: '150px auto'}}>
      <div className="col-8">
        <h2>Who knows, maybe something else down here</h2>
        <p>
          Lorem ipsum dolor amet cred schlitz street art meditation kombucha
          readymade, plaid 3 wolf moon skateboard taiyaki keytar. Pabst fam
          farm-to-table hell of live-edge letterpress. Pinterest scenester
          cornhole, DIY microdosing fashion axe prism green juice lumbersexual.
          Letterpress organic master cleanse helvetica, polaroid gastropub yr
          thundercats XOXO hexagon schlitz jean shorts bicycle rights shoreditch.
        </p>
        <p>
          La croix man braid enamel pin, seitan messenger bag hoodie church-key
          vaporware live-edge. Normcore franzen tofu cornhole. Vape literally
          swag drinking vinegar messenger bag godard. Butcher bitters before
          they sold out, plaid keytar letterpress narwhal. Chillwave craft beer
          subway tile, mixtape squid next level activated charcoal keytar
          thundercats farm-to-table cred hammock franzen.
        </p>
      </div>
    </div>
    <div className="stories">
      <div className="max-width home" style={{marginBottom: '50px'}}>
        <h2 style={{textAlign: 'center'}}>Hacker Stories</h2>
        <div className="flex">
          <div className="col-4 padding">
            <div className="card hover">
              <img src={HeaderImg} width="100%" alt="favorite hack"/>
              <div className="padding">
                Bla bla bla is a person who came to BoilerMake 5 and made a cool thing.
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-4 padding">
            <div className="card hover">
              <img src={HeaderImg} width="100%" alt="favorite hack"/>
              <div className="padding">
                Bla bla bla is a person who came to BoilerMake 5 and made a cool thing.
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-4 padding">
            <div className="card hover">
              <img src={HeaderImg} width="100%" alt="favorite hack"/>
              <div className="padding">
                Bla bla bla is a person who came to BoilerMake 5 and made a cool thing.
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex">
      <div className="col-6 colorBlock pink">
        <div className="max-width flex">
          <div className="col-8 home">
            <h2>Make Something Awesome</h2>
            <p>
              Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum
              solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit
              amit. Lorem ipsum solor sit amit.
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


  </div>
);

export default Home;
