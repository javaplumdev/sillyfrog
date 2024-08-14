'use client';
import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { SignupProps } from '@/types/signup';
import { auth } from '@/firebase/firebaseConfig';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useSignup = () => {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: SignupProps) => {
    const { email, password } = data || {};

    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      toast.success('Successfully created! You may not log in your account.');

      router.push('/signin');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const formSchema = z.object({
    email: z
      .string()
      .min(1, 'Email is required.')
      .email('Invalid email address.')
      .min(2, 'Email must be at least 2 characters.')
      .max(50, 'Email must be at most 50 characters.'),
    password: z
      .string()
      .min(1, 'Password is required.')
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

export default useSignup;
