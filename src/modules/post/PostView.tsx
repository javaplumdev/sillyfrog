import React from 'react';

import PostCard from './PostCard';
import { useView } from './ViewProvider';
import PostComments from './PostComments';
import usePostComment from './usePostComment';
import useGetComments from './useGetComments';

const PostView = () => {
  const { data, isLoading } = useView();
  const { reload, ...commentListProps } = useGetComments();
  const commentProps = usePostComment(reload);

  const { timestamp = { seconds: 0 } } = data || {};
  const seconds: number = timestamp.seconds;

  return (
    <div className="flex flex-col space-y-2">
      <PostCard data={data} isLoading={isLoading} seconds={seconds} />
      <PostComments {...commentProps} {...commentListProps} />
    </div>
  );
};

export default PostView;
