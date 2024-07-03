import React from 'react';

import Link from 'next/link';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form';
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const SignupForm = ({ form, control }: any) => {
  const { onSubmit, handleSubmit, watch } = form || {};

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input id="email" placeholder="Name of your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input id="password" placeholder="Name of your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col">
          <Button type="submit" className="w-full">
            Sign up
          </Button>

          {/* If user have a account already */}
          <div className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{' '}
            <Link href="/signin" className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignupForm;
