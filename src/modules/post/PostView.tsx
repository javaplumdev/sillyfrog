import React from 'react';

import PostNav from './PostNav';
import PostCard from './PostCard';
import PostComments from './PostComments';

import { useView } from './ViewProvider';
import useLike from '../home/feed/useLike';
import useSave from '../home/feed/useSave';
import usePostComment from './usePostComment';
import useGetComments from './useGetComments';
import useDislike from '../home/feed/useDislike';

const PostView = () => {
  const { data, ...rest } = useView();

  const { reload, ...commentListProps } = useGetComments();

  const likeProps = useLike();
  const saveProps = useSave();
  const dislikeProps = useDislike();
  const commentProps = usePostComment(reload, data);

  const { timestamp = { seconds: 0 } } = data || ({} as any);
  const seconds: number = timestamp.seconds;

  return (
    <div className="flex flex-col space-y-2">
      <PostCard
        data={data}
        seconds={seconds}
        {...likeProps}
        {...saveProps}
        {...dislikeProps}
        {...rest}
      />
      <PostComments {...commentProps} {...commentListProps} />
    </div>
  );
};

export default PostView;
