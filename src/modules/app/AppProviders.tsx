import React from 'react';
import AuthProvider from './AuthProvider';
import PasswordCheckerProvider from './PasswordCheckerProvider';

const AppProviders = ({ children }: any) => {
  return (
    <PasswordCheckerProvider>
      <AuthProvider>{children} </AuthProvider>
    </PasswordCheckerProvider>
  );
};

export default AppProviders;
