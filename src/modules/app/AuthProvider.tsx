'use client';
import React, { createContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { cookies } from '@/lib/cookies';
import { auth } from '@/firebase/firebaseConfig';
import { addUserToFirestore } from '@/lib/users';
import { onAuthStateChanged } from 'firebase/auth';

type objType = {
  isAuth: boolean;
  userData: object;
  isLoading: boolean;
};

const obj: objType = {
  userData: {},
  isAuth: false,
  isLoading: false,
};

export const AuthContext = createContext(obj);

// expiration date
const expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000);

const AuthProvider = ({ children }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  const [userData, setUserData] = React.useState<object>({});
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
        const { accessToken, email } = user || {};

        let username = email.split('@')[0];

        if (user) {
          cookies.set('token', accessToken, { expires: expirationDate });

          const updatedUser = { ...user, username }; // adds username

          setUserData(updatedUser);
          addUserToFirestore(updatedUser); // save user to firestore
        }
      });

      return unsubscribe;
    } catch (error) {
      console.error(error);
    }
  }, []);

  React.useEffect(() => {
    const token = cookies.get('token');

    setIsAuth(!!token);
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ isAuth, userData, isLoading }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
