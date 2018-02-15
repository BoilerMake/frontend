import React from 'react';
import Header from '../components/Header';
import HeaderImg from '../assets/images/cover.jpg';
import Stories from '../components/Home_Stories';
import PreFooter from '../components/Home_PreFooter';
import BigB from '../assets/images/b.svg';
import one from '../assets/images/gallery/1.jpg';
import two from '../assets/images/gallery/2.jpg';
import three from '../assets/images/gallery/3.jpg';
import four from '../assets/images/gallery/4.jpg';
import five from '../assets/images/gallery/5.jpg';
import six from '../assets/images/gallery/6.jpg';
import seven from '../assets/images/gallery/7.jpg';
import eight from '../assets/images/gallery/8.jpg';
const Home = () => (
  <div>
    <Header img={HeaderImg} startColor="#667EEA" endColor="#764BA2">
      <h1>Forge The Future</h1>
      <h2>36 Hours of Hacking at Purdue University</h2>
    </Header>
    <div className="max-width home flex">
      <div className="col-8 paddingr" style={{margin: '30px auto'}}>
        <h2>Create, Meet, Learn, & Build</h2>
        <p>
          For the past five years, we've brought in 500 students from across the
          the country to create and collaborate on amazing ideas. This is an event
          for people who live and love hacking. Everything we do at BoilerMake
          is for you.
        </p>
      </div>
    </div>
    <div className="flex images" style={{marginTop: '20px'}}>
      <div className="col-3">
        <img src={one} width="100%" alt="gallery"/>
      </div>
      <div className="col-3">
        <img src={two} width="100%" alt="gallery"/>
      </div>
      <div className="col-3">
        <img src={three} width="100%" alt="gallery"/>
      </div>
      <div className="col-3">
        <img src={four} width="100%" alt="gallery"/>
      </div>
    </div>
    <div className="middleBreak light home">
      <div className="max-width home">
        <h2 style={{textAlign: 'center'}}>Here's a heading to make us seem profound</h2>
        <div className="flex card padding" style={{maxWidth: '600px', margin: '0 auto'}}>
          <div className="col-8" style={{textAlign: 'right'}}>
            <h3>Create awesome projects</h3>
            <p>
              Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum
              solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit
              amit. Lorem ipsum solor sit amit.
            </p>
            <h3>Grow as a person</h3>
            <p>
              Lorem ipsum solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum
              solor sit amit. Lorem ipsum solor sit amit. Lorem ipsum solor sit
              amit. Lorem ipsum solor sit amit.
            </p>
          </div>
          <div className="col-4" style={{textAlign: 'center', justifyContent: 'center', display: 'flex'}}>
            <img src={BigB} width="90%" alt="Illustration"/>
          </div>
        </div>
      </div>
    </div>
    <div className="flex images" style={{marginTop: '-120px'}}>
      <div className="col-3">
        <img src={five} width="100%" alt="gallery"/>
      </div>
      <div className="col-3">
        <img src={six} width="100%" alt="gallery"/>
      </div>
      <div className="col-3">
        <img src={seven} width="100%" alt="gallery"/>
      </div>
      <div className="col-3">
        <img src={eight} width="100%" alt="gallery"/>
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
    {/* <Stories/> */}
    <PreFooter/>


  </div>
);

export default Home;
