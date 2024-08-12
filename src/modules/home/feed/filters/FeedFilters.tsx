'use client';
import React from 'react';

const FeedFilters = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-bold">Feed</h1>

      <div className="flex space-x-3">
        <h3 className="font-bold">All</h3>
        <h3>Latest</h3>
        <h3>Top</h3>
      </div>
    </div>
  );
};

export default FeedFilters;
