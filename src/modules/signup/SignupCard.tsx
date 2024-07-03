'use client';
import * as React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import SignupForm from './SignupForm';
import useSignup from './useSignup';

const SignupCard = () => {
  const formProps = useSignup();

  return (
    <Card className="w-full sm:w-[520px]">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Please enter your details.</CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm {...formProps} />
      </CardContent>
    </Card>
  );
};

export default SignupCard;
