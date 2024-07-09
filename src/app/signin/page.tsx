'use client';
import React from 'react';
import useAuth from '@/hooks/useAuth';
import SigninPage from '@/modules/signin/SigninPage';
import BaseLoader from '@/components/base/loader/BaseLoader';

const Page = () => {
  const { isLoading } = useAuth();

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center min-h-screen items-center">
          <BaseLoader />
        </div>
      )}

      {!isLoading && <SigninPage />}
    </div>
  );
};

export default Page;
