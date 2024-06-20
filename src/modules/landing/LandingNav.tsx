import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

const LandingNav = () => {
  return (
    <div className="p-2 sm:p-3 m-4 sm:my-8 mx-0 px-6 sm:px-12 rounded-xl flex justify-between items-center text-white bg-primary bg-opacity-50 backdrop-blur-md shadow-lg">
      <h2 className="font-bold">&#x1F438; Sillyfrog</h2>
      <div>
        <li className="list-none hidden sm:block">
          <ul>
            <Link href="/about" className={buttonVariants({ variant: 'ghost' })}>
              About us
            </Link>
            <Link href="/signin" className={cn('mx-3', buttonVariants({ variant: 'ghost' }))}>
              Sign up
            </Link>
            <Link
              href="/signup"
              className={cn(buttonVariants({ variant: 'outline' }), 'text-black')}
            >
              Get started
            </Link>
          </ul>
        </li>
      </div>

      <div className="sm:hidden">
        <Menu size={30} />
      </div>
    </div>
  );
};

export default LandingNav;
