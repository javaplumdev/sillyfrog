import React from 'react';

import { Input } from '@/components/ui/input';
import { FormField } from '@/components/ui/form';
import BaseButton from '@/components/base/buttons/BaseButton';
import { Form, FormControl, FormItem, FormMessage } from '@/components/ui/form';

const SigninForm = ({ form, onSubmit, isLoading }: any) => {
  const { handleSubmit, control } = form || {};

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

        <BaseButton type="submit" className="w-full" isLoading={isLoading} disabled={isLoading}>
          Sign in
        </BaseButton>
      </form>
    </Form>
  );
};

export default SigninForm;
