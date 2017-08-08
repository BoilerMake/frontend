import React from 'react';
import Interest from '../components/InterestSignupForm';
import B from '../assets/images/b.png';
import MLHBadge from '../components/MLHBadge';
import FAQ from './Info/FAQ';
import Animation from './Animation';

const Landing = () => (
  <div>
    <div className="landing-page">
      <MLHBadge className="mlh" />
      <Animation />
    </div>
    <FAQ />
  </div>
);

export default Landing;
