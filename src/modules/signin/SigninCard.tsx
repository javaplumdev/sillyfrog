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

import SigninForm from './SigninForm';

import useSignin from './useSignin';

const SignupCard = () => {
  const formProps = useSignin();

  return (
    <Card className="w-full sm:w-[520px]">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Please enter your details.</CardDescription>
      </CardHeader>
      <CardContent>
        <SigninForm {...formProps} />
      </CardContent>

      {/* card footer */}
      <CardFooter className="text-gray-800 text-sm mt-6 flex justify-center">
        Don't have an account?{' '}
        <Link href="/signin" className="underline">
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
