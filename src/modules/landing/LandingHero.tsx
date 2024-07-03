import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MoveUpRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import WaterLily from '../../assets/landing/water-lily.png';
import BaseButton from '@/components/base/buttons/BaseButton';

// const headerOneGradient = {
//   cn: 'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text',
// };

const WaterLilyImg = ({ ...rest }) => <Image src={WaterLily} alt="water-lily" {...rest} />;

const LandingHero = () => {
  return (
    <div className="mt-40 mb-10 flex flex-col items-center text-center relative">
      <h1 className={cn('text-3xl md:text-5xl font-extrabold')}>
        Leap, Laugh, and Share on SillyFrog! &#x1F438;
      </h1>

      <p className="text-gray-800 my-12 text-sm sm:text-base md:w-[620px]">
        SillyFrog is the place to leap into laughter and share your funniest moments. Connect with a
        community that loves to laugh as much as you do.
      </p>

      <div>
        <Link href="/home" className={cn(buttonVariants({ variant: 'outline' }))}>
          Visit anonymously
        </Link>

        <span className="mx-3">or</span>

        <BaseButton to="/signup" endIcon={<MoveUpRight />}>
          Get Started
        </BaseButton>

        <WaterLilyImg className="hidden md:block absolute top-20 left-0" />

        <WaterLilyImg className="hidden md:block absolute bottom-0 right-0" />
      </div>
    </div>
  );
};

export default LandingHero;
