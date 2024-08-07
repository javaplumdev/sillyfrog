import React from 'react';
import { Check, X } from 'lucide-react';

const SignupPassChecker = ({ form, passwordReq }: any) => {
  const { watch } = form || {};

  return (
    <div className="text-sm mt-5">
      {passwordReq(watch('password')).map((item: any, index: number) => {
        const { text, match } = item || {};
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
