import React from 'react';
import { cn } from '@/lib/utils';
import SignupForm from './SignupForm';

const SignupPage = () => {
  return (
    <div className={cn('flex flex-col items-center justify-center h-screen px-3')}>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
