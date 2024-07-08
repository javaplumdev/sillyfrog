'use client';
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { auth } from '@/firebase/firebaseConfig';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInWithEmailAndPassword } from 'firebase/auth';

const useSignin = () => {
  const [error, setError] = React.useState<any>('');
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: any) => {
    const { email, password } = data || {};

    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      // hard refresh
      window.location.reload();
    } catch (error) {
      setError(error);
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

  return { form, error, onSubmit, isLoading };
};

export default useSignin;
