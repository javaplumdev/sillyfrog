'use client';
import { auth, googleProvider } from '@/firebase/firebaseConfig';
import { signInWithRedirect } from 'firebase/auth';
import { useState } from 'react';

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

const useSigninWithGoogle = () => {
  const [error, setError] = useState<any>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { googleAuthOnSubmit: onSubmit, googleAuthIsLoading: isLoading, googleAuthError: error };
};

export default useSigninWithGoogle;
