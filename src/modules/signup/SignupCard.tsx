'use client';
import * as React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { ERROR_MESSAGES } from '@/constant/errors';
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import BaseAlert from '@/components/base/alerts/BaseAlert';
import BaseButton from '@/components/base/buttons/BaseButton';
import BaseSeparator from '@/components/base/layout/BaseSeparator';

import SignupForm from './SignupForm';
import SignupPassChecker from './SignupPassChecker';

import useSignup from './useSignup';
import useSigninWithGoogle from '../signin/useSigninWithGoogle';
import { usePasswordChecker } from '@/hooks/usePasswordChecker';

const SignupCard = () => {
  const { error, ...formProps } = useSignup();
  const { isPassValid, ...passCheckerProps } = usePasswordChecker();
  const { googleAuthOnSubmit, googleAuthIsLoading } = useSigninWithGoogle();

  return (
    <Card className="w-full sm:w-[520px]">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Please enter your details.</CardDescription>
      </CardHeader>
      <CardContent>
        {!!error && <BaseAlert description={ERROR_MESSAGES[error.code]} />}

        <BaseButton
          variant="outline"
          className="w-full"
          disabled={googleAuthIsLoading}
          isLoading={googleAuthIsLoading}
          icon={<FcGoogle className="h-4 w-4" />}
          onClick={() => googleAuthOnSubmit()}
        >
          Continue with Google
        </BaseButton>

        <BaseSeparator text="or" />

        <SignupForm isPassValid={isPassValid} {...formProps} />
        <SignupPassChecker {...formProps} {...passCheckerProps} />
      </CardContent>

      {/* card footer */}
      <CardFooter className="text-sm mt-6 flex justify-center">
        Already have an account?{' '}
        <Link href="/signin" className="underline ml-1">
          Sign in
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
