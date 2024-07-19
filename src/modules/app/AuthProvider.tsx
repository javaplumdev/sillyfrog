'use client';
import React, { createContext } from 'react';
import { usePathname } from 'next/navigation';

import { cookies } from '@/lib/cookies';
import { auth } from '@/firebase/firebaseConfig';
import { addUserToFirestore } from '@/lib/users';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import UserAuthConfirmationDialog from '@/components/base/dialogs/UserAuthConfirmationDialog';

type objType = {
  userData: any;
  isAuth: boolean;
  isLoading: boolean;
  isPasswordOpen: boolean;
  isAuthConfirmation: boolean;

  // functions
  logOut: () => Promise<void>;
  togglePasswordOpen: () => void;
  toggleIsAuthConfirmation: () => void;
  onActionWithAuth: (toggle: any) => any;
};

const obj: objType = {
  userData: null,
  isAuth: false,
  isLoading: false,
  isPasswordOpen: true,
  isAuthConfirmation: false,

  // functions
  logOut: async () => {},
  onActionWithAuth: () => {},
  togglePasswordOpen: () => {},
  toggleIsAuthConfirmation: () => {},
};

export const AuthContext: React.Context<objType> = createContext(obj);

// expiration date
const expirationDate: Date = new Date();
expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000);

const AuthProvider: React.FC<any> = ({ children }) => {
  const pathname = usePathname();

  const [userData, setUserData] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isAuth, setIsAuth] = React.useState<boolean>(!!cookies.get('token'));
  const [isAuthConfirmation, setIsAuthCofirmation] = React.useState<boolean>(false);
  const [isPasswordOpen, setIsPasswordOpen] = React.useState<boolean>(true);

  const togglePasswordOpen = () => setIsPasswordOpen(!isPasswordOpen);
  const toggleIsAuthConfirmation = () => setIsAuthCofirmation(!isAuthConfirmation);

  React.useEffect(() => {
    setIsAuthCofirmation(false);
  }, [pathname]);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        const { accessToken, email } = user;
        const username: string = (email || '').split('@')[0];

        cookies.set('token', accessToken, { expires: expirationDate });

        const updatedUser = { ...user, username }; // adds username
        setUserData(updatedUser);
        addUserToFirestore(updatedUser); // Save user to Firestore
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      cookies.remove('token');
      window.location.replace('/');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
        isPasswordOpen,
        onActionWithAuth,
        isAuthConfirmation,
        togglePasswordOpen,
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
