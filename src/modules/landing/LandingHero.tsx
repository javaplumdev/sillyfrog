import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import BaseButton from '@/components/base/buttons/BaseButton';
import { MoveRight } from 'lucide-react';

// const headerOneGradient = {
//   cn: 'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text',
// };

const LandingHero = () => {
  return (
    <div className="my-40 flex flex-col items-center text-center">
      <h1 className={cn('text-3xl md:text-5xl font-extrabold')}>
        Leap, Laugh, and Share on SillyFrog! &#x1F438;
      </h1>

      <p className="text-gray-800 my-12 text-sm sm:text-base md:w-[620px]">
        SillyFrog is the place to leap into laughter and share your funniest moments. Connect with a
        community that loves to laugh as much as you do.
      </p>

      <div>
        <Link href="/signin" className={cn('mr-3', buttonVariants({ variant: 'outline' }))}>
          Sign in
        </Link>

        <BaseButton to="/signup" endIcon={<MoveRight />}>
          Get Started
        </BaseButton>
      </div>
    </div>
  );
};

export default LandingHero;
