import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LandingNav = () => {
  return (
    <div className="p-2 sm:p-3 m-4 sm:my-8 mx-0 px-6 sm:px-12 bg-primary text-white rounded-xl flex justify-between items-center">
      <h2 className="font-bold">&#x1F438; Sillyfrog</h2>
      <div>
        <li className="list-none">
          <ul>
            <Link href="/about" className={buttonVariants({ variant: 'ghost' })}>
              About us
            </Link>
            <Link href="/signin" className={cn('mx-3', buttonVariants({ variant: 'ghost' }))}>
              Sign up
            </Link>
            <Link href="/signup" className={buttonVariants({ variant: 'secondary' })}>
              Get started
            </Link>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default LandingNav;
