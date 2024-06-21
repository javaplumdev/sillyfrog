import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import LandingNav from './LandingNav';
import LandingHero from './LandingHero';
import LandingAbout from './LandingAbout';
import LandingFooter from './LandingFooter';

import styles from './styles.module.scss';
import img from '../../assets/landing/hand-with-gradient.png';

const LandingPage = () => {
  return (
    <div className="mx-2 sm:container">
      <LandingNav />
      <LandingHero />

      <div className="flex justify-center w-100 p-0">
        <Image src={img} alt="hand" className={cn(styles['image'])} />
      </div>

      <LandingAbout />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
