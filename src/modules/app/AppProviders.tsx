import React from 'react';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';
import PasswordCheckerProvider from './PasswordCheckerProvider';
import NotificationsProvider from './NotificationsProvider';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <PasswordCheckerProvider>
        <AuthProvider>
          <NotificationsProvider>{children}</NotificationsProvider>
        </AuthProvider>
      </PasswordCheckerProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
