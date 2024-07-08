import React from 'react';
import Link from 'next/link';
import BaseSheet from './BaseSheet';
import BaseButton from '../buttons/BaseButton';

const BaseNavbar = () => {
  return (
    <div className="container flex justify-between items-center p-0 py-3 px-2">
      <div className="flex items-center">
        {/* className="hidden md:block" */}
        {/* <BaseNavigation /> */}
        <BaseSheet />

        <Link href="/">
          <h2 className="font-bold text-md ml-2">Sillyfrog</h2>
        </Link>
      </div>

      <div className="text-end w-full md:w-auto">
        <BaseButton to="/signin" variant="ghost" className="mr-2">
          Log in
        </BaseButton>
        <BaseButton to="/signup">Create account</BaseButton>
      </div>
    </div>
  );
};

export default BaseNavbar;
