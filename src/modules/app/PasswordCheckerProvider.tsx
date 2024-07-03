import React, { createContext } from 'react';

interface PasswordCheckerProps {
  testValue: string;
}

const obj: PasswordCheckerProps = {
  testValue: '',
};

export const PasswordCheckerContext = createContext(obj);

const PasswordCheckerProvider = ({ children }: any) => {
  let testValue: string = '';

  return (
    <PasswordCheckerContext.Provider value={{ testValue }}>
      {children}
    </PasswordCheckerContext.Provider>
  );
};

export default PasswordCheckerProvider;
