import React from 'react';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';
import PasswordCheckerProvider from './PasswordCheckerProvider';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <PasswordCheckerProvider>
        <AuthProvider>{children} </AuthProvider>
      </PasswordCheckerProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
