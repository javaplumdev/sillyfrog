import React from 'react';
import { Check, X } from 'lucide-react';

interface PasswordRequirement {
  text: string;
  match: boolean;
}

interface SignupPassCheckerProps {
  form: { watch: (field: string) => string };
  passwordReq: (password: string) => PasswordRequirement[];
}

const SignupPassChecker: React.FC<SignupPassCheckerProps> = ({ form, passwordReq }) => {
  const { watch } = form || {};

  return (
    <div className="text-sm mt-5">
      {passwordReq(watch('password')).map(({ text, match }: PasswordRequirement, index: number) => {
        return (
          <div key={index} className="flex items-center mt-1">
            <div className="mr-1">
              {!!match ? (
                <Check size="16" className="text-primary" />
              ) : (
                <X size="16" className="text-destructive" />
              )}
            </div>
            <span>{text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SignupPassChecker;
