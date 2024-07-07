'use client';
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const useSignin = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = (data: any) => {
    try {
      setIsLoading(true);

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const formSchema = z.object({
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address.')
      .min(2, 'Email must be at least 2 characters')
      .max(50, 'Email must be at most 50 characters'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters.')
      .max(50, 'Password must be at most 50 characters.'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return { form, onSubmit, isLoading };
};

export default useSignin;
