import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import SignupCard from './SigninCard';
import { MoveLeft } from 'lucide-react';

const SignupPage = () => {
  return (
    <div className={cn('flex flex-col items-center justify-center px-3 mt-8')}>
      <span className={cn('flex items-center justify-start text-lg p-3 mb-4')}>
        <MoveLeft className={cn('mr-3')} />{' '}
        <Link href="/" className="underline">
          Go back
        </Link>
      </span>
      <SignupCard />
    </div>
  );
};

export default SignupPage;
