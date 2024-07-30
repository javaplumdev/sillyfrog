'use client';
import * as React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import BaseButton from '@/components/base/buttons/BaseButton';
import BaseSeparator from '@/components/base/layout/BaseSeparator';

import SigninForm from './SigninForm';
import { ERROR_MESSAGES } from '@/constant/errors';
import BaseAlert from '@/components/base/alerts/BaseAlert';

import useSignin from './useSignin';
import useSigninWithGoogle from './useSigninWithGoogle';

const SigninCard = () => {
  const { error, isLoading, ...formProps } = useSignin();
  const { googleAuthOnSubmit, googleAuthIsLoading, googleAuthError } = useSigninWithGoogle();

  return (
    <Card className="w-full sm:w-[520px]">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Please enter your details.</CardDescription>
      </CardHeader>
      <CardContent>
        {!!error && <BaseAlert description={ERROR_MESSAGES[error.code]} />}
        {!!googleAuthError && <BaseAlert description={ERROR_MESSAGES[googleAuthError.code]} />}

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

        <SigninForm isLoading={isLoading} {...formProps} />
      </CardContent>

      {/* card footer */}
      <CardFooter className="text-sm mt-6 flex justify-center">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="underline ml-1">
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SigninCard;
