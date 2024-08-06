'use client';

import React from 'react';
import PostView from './PostView';

const PostPage = () => {
  return (
    <div className="grid grid-cols-12 gap-3 px-2">
      <div className="md:col-span-8 col-span-12">
        <PostView />
      </div>
      <div className="col-span-4 ">Profile</div>
    </div>
  );
};

export default PostPage;
