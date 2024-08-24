'use client';

import React from 'react';
import PostView from './PostView';
import PostProfile from './PostProfile';
import PostNav from './PostNav';
import { useView } from './ViewProvider';

const PostPage = () => {
  const { data, ...rest } = useView();

  return (
    <div>
      <PostNav data={data as any} {...rest} />
      <div className="grid grid-cols-12 gap-3 px-2">
        <div className="md:col-span-8 col-span-12">
          <PostView />
        </div>
        <div className="col-span-12 md:col-span-4">
          <PostProfile data={data as any} {...rest} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
