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
import BaseButton from '@/components/base/buttons/BaseButton';
import BaseSeparator from '@/components/base/layout/BaseSeparator';

import { FcGoogle } from 'react-icons/fc';

import SigninForm from './SigninForm';

import useSignin from './useSignin';

const SigninCard = () => {
  const formProps = useSignin();

  return (
    <Card className="w-full sm:w-[520px]">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Please enter your details.</CardDescription>
      </CardHeader>
      <CardContent>
        <BaseButton
          variant="outline"
          size="sm"
          className="w-full"
          icon={<FcGoogle className="h-4 w-4" />}
        >
          Continue with Google
        </BaseButton>

        <BaseSeparator text="or" />

        <SigninForm {...formProps} />
      </CardContent>

      {/* card footer */}
      <CardFooter className="text-gray-800 text-sm mt-6 flex justify-center">
        Don't have an account?{' '}
        <Link href="/signup" className="underline ml-1">
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SigninCard;
