import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import React from 'react';
import FeedCardUserInfo from '../home/feed/card/FeedCardUserInfo';

const PostComments = ({ data, seconds }: any) => {
  return (
    <div className="pt-3">
      <span className="text-md font-bold">Comments 0</span>

      <div className="ml-4 border-b-3 mb-3">
        <div className="flex flex-row space-x-2 my-3">
          <BaseAvatar {...data} />
          <FeedCardUserInfo seconds={seconds} {...data} />
        </div>

        <div>content</div>
      </div>
    </div>
  );
};

export default PostComments;
