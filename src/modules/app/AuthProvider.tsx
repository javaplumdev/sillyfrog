'use client';
import { auth } from '@/firebase/firebaseConfig';
import { getRedirectResult } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { createContext } from 'react';

type objType = {
  isLoading: boolean;
  resultFromRedirect: () => void;
};

const obj: objType = {
  isLoading: false,
  resultFromRedirect: () => null,
};

export const AuthContext = createContext(obj);

const AuthProvider = ({ children }: any) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const resultFromRedirect = async () => {
    setIsLoading(true);

    try {
      const result = await getRedirectResult(auth);
      console.log(result);

      if (result) router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoading, resultFromRedirect }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
