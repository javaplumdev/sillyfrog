import React from 'react';

import PostCard from './PostCard';
import PostComments from './PostComments';

import { useView } from './ViewProvider';
import useLike from '../home/feed/useLike';
import usePostComment from './usePostComment';
import useGetComments from './useGetComments';
import useDislike from '../home/feed/useDislike';

const PostView = () => {
  const { data, ...rest } = useView();

  const { reload, ...commentListProps } = useGetComments();

  const likeProps = useLike();
  const dislikeProps = useDislike();
  const commentProps = usePostComment(reload);

  const { timestamp = { seconds: 0 } } = data || {};
  const seconds: number = timestamp.seconds;

  return (
    <div className="flex flex-col space-y-2">
      <PostCard data={data} seconds={seconds} {...likeProps} {...dislikeProps} {...rest} />
      <PostComments {...commentProps} {...commentListProps} />
    </div>
  );
};

export default PostView;
