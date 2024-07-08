import React from 'react';

import { Input } from '@/components/ui/input';
import { FormField } from '@/components/ui/form';
import BaseButton from '@/components/base/buttons/BaseButton';
import { Form, FormControl, FormItem, FormMessage } from '@/components/ui/form';

const SignupForm = ({ form, control, isPassValid, onSubmit, isLoading }: any) => {
  const { handleSubmit, watch } = form || {};

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

        <BaseButton
          type="submit"
          className="w-full"
          disabled={!isPassValid(watch('password')) || isLoading}
          isLoading={isLoading}
        >
          Sign up
        </BaseButton>
      </form>
    </Form>
  );
};

export default SignupForm;
