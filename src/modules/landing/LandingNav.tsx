import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

const LandingNav = () => {
  return (
    <div className="p-2 sm:p-3 m-4 sm:my-8 mx-0 px-6 sm:px-12 rounded-xl flex justify-between items-center text-white bg-primary">
      <div className="flex items-center">
        <h2 className="mr-2 bg-white rounded-full border-black border px-2 py-1">&#x1F438;</h2>
        <h2 className="font-bold">Sillyfrog</h2>
      </div>
      <div className="hidden sm:block">
        <Link href="#about_section" className={buttonVariants({ variant: 'ghost' })}>
          About us
        </Link>

        <Link href="/signin" className={cn('mx-3', buttonVariants({ variant: 'ghost' }))}>
          Sign in
        </Link>

        <Link href="/signup" className={cn(buttonVariants({ variant: 'outline' }), 'text-black')}>
          Get started
        </Link>
      </div>

      <div className="sm:hidden">
        <Menu size={30} />
      </div>
    </div>
  );
};

export default LandingNav;
