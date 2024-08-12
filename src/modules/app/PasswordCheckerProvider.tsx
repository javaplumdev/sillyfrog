'use client';
import React, { createContext } from 'react';

interface PasswordCheckerProps {
  isPassValid: (password: string) => boolean;
  passwordReq: (password: string) => { text: string; match: boolean }[];
}

const obj: PasswordCheckerProps = {
  passwordReq: () => [],
  isPassValid: () => false,
};

export const PasswordCheckerContext = createContext(obj);

const PasswordCheckerProvider = ({ children }: { children: React.ReactNode }) => {
  const passwordReq = (password: string): { text: string; match: boolean }[] => {
    return [
      {
        text: 'Must be at least 8 characters',
        match: (password || '').length >= 8,
      },
      {
        text: 'Must contain at least 1 uppercase letter.',
        match: /[A-Z]/.test(password),
      },
      {
        text: 'Must contain at least 1 lowercase letter',
        match: /[a-z]/.test(password),
      },
      {
        text: 'Must contain at least 1 number',
        match: /\d/.test(password),
      },
    ];
  };

  const isPassValid = (password: string): boolean => {
    return passwordReq(password).every((item) => item.match === true);
  };

  return (
    <PasswordCheckerContext.Provider value={{ passwordReq, isPassValid }}>
      {children}
    </PasswordCheckerContext.Provider>
  );
};

export default PasswordCheckerProvider;
