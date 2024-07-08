'use client';
import React from 'react';
import useAuth from '@/hooks/useAuth';
import SigninPage from '@/modules/signin/SigninPage';
import BaseLoader from '@/components/base/loader/BaseLoader';

const Page = () => {
  const { resultFromRedirect, isLoading } = useAuth();

  // ensure redirect function will render once
  // to avoid unnecessary re-renders
  React.useEffect(() => {
    resultFromRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading && <BaseLoader />}
      {!isLoading && <SigninPage />}
    </div>
  );
};

export default Page;
