'use client';
import * as React from 'react';
import Link from 'next/link';

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { ERROR_MESSAGES } from '@/constant/errors';
import BaseAlert from '@/components/base/alerts/BaseAlert';
import SignupForm from './SignupForm';
import SignupPassChecker from './SignupPassChecker';

import useSignup from './useSignup';
import { usePasswordChecker } from '@/hooks/usePasswordChecker';

const SignupCard = () => {
  const { error, ...formProps } = useSignup();
  const { isPassValid, ...passCheckerProps } = usePasswordChecker();

  return (
    <Card className="w-full sm:w-[520px]">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Please enter your details.</CardDescription>
      </CardHeader>
      <CardContent>
        {!!error && <BaseAlert description={ERROR_MESSAGES[error.code]} />}

        <SignupForm isPassValid={isPassValid} {...formProps} />
        <SignupPassChecker {...formProps} {...passCheckerProps} />
      </CardContent>

      {/* card footer */}
      <CardFooter className="text-gray-800 text-sm mt-6 flex justify-center">
        Already have an account?{' '}
        <Link href="/signin" className="underline ml-1">
          Sign in
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
