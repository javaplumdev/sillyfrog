import React from 'react';
import PostInputComment from './PostInputComment';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import FeedCardUserInfo from '../home/feed/card/FeedCardUserInfo';

const PostComments = (props: any) => {
  const { data, ...rest } = props;

  return (
    <div className="pt-3 flex flex-col space-y-6">
      <span className="text-md font-bold">Comments 0</span>
      <PostInputComment {...rest} />

      {data.map((item: any) => {
        const { content, photo, name, timestamp } = item || {};
        const seconds: number = timestamp ? timestamp.seconds : null;
        return (
          <div className="mb-3">
            <div className="flex flex-row space-x-2 my-3">
              <BaseAvatar photo={photo} name={name} />
              <FeedCardUserInfo seconds={seconds} name={name} />
            </div>

            <div>{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostComments;
