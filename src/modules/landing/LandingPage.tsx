import React from 'react';
import LandingNav from './LandingNav';
import LandingHero from './LandingHero';

const LandingPage = () => {
  return (
    <div className="mx-2 sm:container">
      <LandingNav />
      <LandingHero />
    </div>
  );
};

export default LandingPage;
