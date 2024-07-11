import React from 'react';

const FeedFilters = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-bold">Feed</h1>

      <div className="flex space-x-3">
        <h2>All</h2>
        <h2>Latest</h2>
        <h2>Top</h2>
      </div>
    </div>
  );
};

export default FeedFilters;
