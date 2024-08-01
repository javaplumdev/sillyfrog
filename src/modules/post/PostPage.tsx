'use client';

import React from 'react';
import { useView } from './ViewProvider';
import FeedCard from '../home/feed/card/FeedCard';

const PostPage = () => {
  const { data, isLoading } = useView();

  console.log(data);

  return (
    <div className="grid grid-cols-12 gap-3 px-2">
      <div className="md:col-span-8 col-span-12">
        {/* <FeedCard data={data} isLoading={isLoading} countSkeleton={1} /> */}
        <div>{JSON.stringify(data, null, 4)}</div>
      </div>
      <div className="col-span-4 ">Profile</div>
    </div>
  );
};

export default PostPage;
