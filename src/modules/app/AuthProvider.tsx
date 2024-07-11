'use client';
import React, { createContext } from 'react';
import { usePathname } from 'next/navigation';

import { cookies } from '@/lib/cookies';
import { auth } from '@/firebase/firebaseConfig';
import { addUserToFirestore } from '@/lib/users';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import UserAuthConfirmationDialog from '@/components/base/dialogs/UserAuthConfirmationDialog';

type objType = {
  isAuth: boolean;
  userData: object;
  isLoading: boolean;
  isAuthConfirmation: boolean;

  // functions
  logOut: () => Promise<void>;
  toggleIsAuthConfirmation: () => void;
  onActionWithAuth: (toggle: any) => any;
};

const obj: objType = {
  userData: {},
  isAuth: false,
  isLoading: false,
  isAuthConfirmation: false,

  // functions
  logOut: async () => {},
  onActionWithAuth: () => {},
  toggleIsAuthConfirmation: () => {},
};

export const AuthContext: React.Context<objType> = createContext(obj);

// expiration date
const expirationDate: Date = new Date();
expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000);

const AuthProvider = ({ children }: any) => {
  const pathname = usePathname();

  const [userData, setUserData] = React.useState<object>({});
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [isAuthConfirmation, setIsAuthCofirmation] = React.useState<boolean>(false);
  const toggleIsAuthConfirmation = () => setIsAuthCofirmation(!isAuthConfirmation);

  // close dialog whenever path changes
  React.useEffect(() => {
    setIsAuthCofirmation(false);
  }, [pathname]);

  React.useEffect(() => {
    setIsLoading(true);

    try {
      const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
        const { accessToken, email } = user || {};

        let username: string = (email || '').split('@')[0];

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
    } finally {
      setInterval(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  React.useEffect(() => {
    const token: string = cookies.get('token');

    setIsAuth(!!token);
  }, [pathname]);

  const logOut = async () => {
    setIsLoading(true);

    try {
      await signOut(auth);

      cookies.remove('token');

      window.location.replace('/');
    } catch (error) {
      console.error(error);
    } finally {
      setInterval(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const onActionWithAuth = (toggle: any) => {
    return isAuth ? toggle : toggleIsAuthConfirmation;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        logOut,
        userData,
        isLoading,
        onActionWithAuth,
        isAuthConfirmation,
        toggleIsAuthConfirmation,
      }}
    >
      {children}

      <UserAuthConfirmationDialog
        isOpen={isAuthConfirmation}
        toggleOpen={toggleIsAuthConfirmation}
      />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
