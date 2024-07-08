import React from 'react';
import BaseSheet from './BaseSheet';
import BaseButton from '../buttons/BaseButton';

const BaseNavbar = () => {
  return (
    <div className="container flex justify-between items-center p-0 py-3 px-2">
      <div className="flex items-center">
        {/* className="hidden md:block" */}
        {/* <BaseNavigation /> */}
        <BaseSheet />
        <h2 className="font-bold text-md ml-2">Sillyfrog</h2>
      </div>

      <div className="text-end w-full md:w-auto">
        <BaseButton variant="outline" className="mr-2">
          Log in
        </BaseButton>
        <BaseButton>Create account</BaseButton>
      </div>
    </div>
  );
};

export default BaseNavbar;
