import React from 'react';
import useAuth from '@/hooks/useAuth';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FormField } from '@/components/ui/form';
import BaseButton from '@/components/base/buttons/BaseButton';
import { Form, FormControl, FormItem, FormMessage } from '@/components/ui/form';

const SignupForm = ({ form, control, isPassValid, onSubmit, isLoading }: any) => {
  const { handleSubmit, watch } = form || {};
  const { togglePasswordOpen, isPasswordOpen } = useAuth();

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
            <FormItem className="relative">
              <FormControl>
                <Input
                  id="password"
                  placeholder="Name of your password"
                  type={isPasswordOpen ? 'password' : 'text'}
                  {...field}
                />
              </FormControl>

              <div
                onClick={() => togglePasswordOpen()}
                className="absolute top-0 right-0 mr-4 cursor-pointer"
              >
                {isPasswordOpen ? <EyeOff size="22" /> : <Eye size="22" />}
              </div>
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
