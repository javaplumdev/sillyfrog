import React from 'react';

import Feed from './feed/Feed';
import Weekly from './weekly/Weekly';
import Categories from './categories/Categories';

const HomePage = () => {
  return (
    <div className="sm:container mx-auto sm:px-0">
      <div className="grid grid-cols-12 gap-3">
        <div className="hidden md:block col-span-3">
          <Categories />
        </div>

        <Feed />

        <div className="hidden md:block col-span-3">
          <Weekly />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
