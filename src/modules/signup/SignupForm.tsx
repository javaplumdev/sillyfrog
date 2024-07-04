import React from 'react';

import Link from 'next/link';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form';
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const SignupForm = ({ form, control, isPassValid }: any) => {
  const { onSubmit, handleSubmit, watch } = form || {};

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

        <Button type="submit" className="w-full" disabled={!isPassValid(watch('password'))}>
          Sign up
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
