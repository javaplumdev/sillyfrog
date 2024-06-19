import React from 'react';
import { cn } from '@/lib/utils';
import BaseButton from '@/components/base/buttons/BaseButton';

// const headerOneGradient = {
//   cn: 'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text',
// };

const LandingHero = () => {
  return (
    <div className="my-36 text-center sm:text-left md:w-[920px]">
      <h1 className={cn('text-3xl md:text-5xl font-extrabold')}>
        Leap, Laugh, and Share on SillyFrog!
      </h1>

      <p className="text-gray-800 my-12 text-sm sm:text-base md:w-[620px]">
        SillyFrog is the place to leap into laughter and share your funniest moments. Connect with a
        community that loves to laugh as much as you do.
      </p>

      <BaseButton variant="outline" className="mr-2">
        Sign in
      </BaseButton>
      <BaseButton>Get Started</BaseButton>
    </div>
  );
};

export default LandingHero;
