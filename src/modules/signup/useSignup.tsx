'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { SignupProps } from '@/types/signup';
import { zodResolver } from '@hookform/resolvers/zod';

const useSignup = () => {
  const onSubmit = (data: SignupProps) => console.log(data);

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
      .min(6, 'Password must be at least 6 characters.')
      .max(50, 'Password must be at most 50 characters.'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return { form, onSubmit };
};

export default useSignup;
