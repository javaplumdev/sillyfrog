import React from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form';
import { Form, FormControl, FormItem, FormMessage } from '@/components/ui/form';

const SigninForm = ({ form }: any) => {
  const { onSubmit, handleSubmit, watch, control } = form || {};

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
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
              <FormControl>
                <Input id="password" placeholder="Name of your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button size="sm" type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </Form>
  );
};

export default SigninForm;
