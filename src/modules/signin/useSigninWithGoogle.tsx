'use client';
import { auth, googleProvider } from '@/firebase/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

const useSigninWithGoogle = () => {
  const router = useRouter();

  const [error, setError] = useState<string | any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const result = await signInWithPopup(auth, googleProvider);

      if (result) router.push('/');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return { googleAuthOnSubmit: onSubmit, googleAuthIsLoading: isLoading, googleAuthError: error };
};

export default useSigninWithGoogle;
