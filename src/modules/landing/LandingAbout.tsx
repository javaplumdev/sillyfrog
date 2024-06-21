import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import styles from './styles.module.scss';
import AboutMobile from '../../assets/landing/about-mobile.svg';

const LandingAbout = () => {
  return (
    <div className="mt-48 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">About us</h1>
        <p className="text-gray-800 text-md md:text-lg">
          Dive into the world of hilarity with SillyFrog, where laughter is a way of life and
          sharing your funniest moments is a daily ritual. Join a vibrant community of humor
          enthusiasts who are always ready to brighten your day with their wit and whimsy.
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          priority
          src={AboutMobile}
          alt="Follow us on Twitter"
          className={cn(styles['image'], 'min-w-screen-sm')}
        />
      </div>
    </div>
  );
};

export default LandingAbout;
