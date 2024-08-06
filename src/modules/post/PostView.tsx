import React from 'react';
import { useView } from './ViewProvider';
import PostComments from './PostComments';
import PostCard from './PostCard';

const PostView = () => {
  const { data, isLoading } = useView();

  const { timestamp } = data || {};

  const seconds: number = timestamp ? timestamp.seconds : null;

  return (
    <div className="flex flex-col space-y-2">
      {/* <FeedCard data={data} isLoading={isLoading} countSkeleton={1} /> */}
      <div>{JSON.stringify(data, null, 4)}</div>
      <PostCard data={data} isLoading={isLoading} seconds={seconds} />
      <PostComments data={data} seconds={seconds} />
    </div>
  );
};

export default PostView;
