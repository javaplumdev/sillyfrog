import React from 'react';
import PasswordCheckerProvider from './PasswordCheckerProvider';

const AppProviders = ({ children }: any) => {
  return <PasswordCheckerProvider>{children}</PasswordCheckerProvider>;
};

export default AppProviders;
