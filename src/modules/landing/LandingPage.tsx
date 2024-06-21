import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import LandingNav from './LandingNav';
import LandingHero from './LandingHero';
import LandingAbout from './LandingAbout';

import styles from './styles.module.scss';
import test from '../../assets/landing/hand-with-gradient.png';

const LandingPage = () => {
  return (
    <div className="mx-2 sm:container">
      <LandingNav />
      <LandingHero />

      <div className="flex justify-center w-100 p-0">
        <Image src={test} alt="hand" className={cn(styles['selector'])} />
      </div>

      <LandingAbout />
    </div>
  );
};

export default LandingPage;
