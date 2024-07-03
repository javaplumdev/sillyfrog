import React from 'react';
import Link from 'next/link';

const LandingFooter = () => {
  return (
    <div className="mt-64 mb-12">
      <div className="bottom-0 p-3 text-center w-full rounded-xl">
        <small className="text-gray-800 text-sm">
          Icons by{' '}
          <Link href="https://icons8.com/" target="_blank" className="underline">
            Icons8
          </Link>
        </small>

        <br />

        <small className="text-gray-800 text-sm">Sillyfrog all rights reserved</small>
      </div>
    </div>
  );
};

export default LandingFooter;
