import React from 'react';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';
import PasswordCheckerProvider from './PasswordCheckerProvider';
import NotificationsProvider from './NotificationsProvider';
import UsersProvider from './UsersProvider';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <PasswordCheckerProvider>
        <AuthProvider>
          <UsersProvider>
            <NotificationsProvider>{children}</NotificationsProvider>
          </UsersProvider>
        </AuthProvider>
      </PasswordCheckerProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
