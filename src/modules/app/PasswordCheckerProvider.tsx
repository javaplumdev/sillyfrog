import React, { createContext } from 'react';
import { useForm } from 'react-hook-form';

interface PasswordCheckerProps {
  passwordReq: Array<PasswordReqProps>;
}

interface PasswordReqProps {
  text: string;
  match: boolean;
}

export type PasswordReqArrayProps = PasswordReqProps[];

const obj: PasswordCheckerProps = {
  passwordReq: [],
};

export const PasswordCheckerContext = createContext(obj);

const PasswordCheckerProvider = ({ children }: any) => {
  const { watch } = useForm();

  const password: string = watch?.('password') || '';

  const passwordReq: PasswordReqArrayProps = [
    {
      text: 'Must be at least 8 characters',
      match: (password || []).length >= 8,
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

  return (
    <PasswordCheckerContext.Provider value={{ passwordReq }}>
      {children}
    </PasswordCheckerContext.Provider>
  );
};

export default PasswordCheckerProvider;
