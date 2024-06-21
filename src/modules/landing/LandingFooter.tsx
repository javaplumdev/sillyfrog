import React from 'react';
import Link from 'next/link';

const LandingFooter = () => {
  return (
    <div className="mt-64 mb-12">
      <div className="bottom-0 bg-gray-300 p-3 text-center w-full rounded-xl">
        <span className="text-gray-800">
          Icons by{' '}
          <Link href="https://icons8.com/" target="_blank" className="underline">
            Icons8
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LandingFooter;
