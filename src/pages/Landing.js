import React from 'react';
import MLHBadge from '../components/MLHBadge';
import FAQ from './Info/FAQ';
import Animation from './Animation';
import Sponsors from '../components/Sponsors';
import Schedule from '../components/Schedule';

const Landing = () => (
  <div>
    <div className="landing-page">
      <MLHBadge className="mlh" />
      <Animation />
    </div>
      <Schedule />
      <Sponsors />
      <FAQ />
  </div>
);

export default Landing;
