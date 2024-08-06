import React from 'react';

import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import FeedCardUserInfo from '../home/feed/card/FeedCardUserInfo';
import FeedCardLikeButtons from '../home/feed/card/FeedCardLikeButtons';
import FeedCardInteractions from '../home/feed/card/FeedCardInteractions';
import BaseCardSkeletons from '@/components/base/skeletons/BaseCardSkeletons';

const PostCard = (props: any) => {
  const { data, isLoading, seconds } = props;
  const { saves, likes, postId, dislikes, feed_content } = data || {};

  return (
    <div>
      {!!isLoading && <BaseCardSkeletons count={1} />}
      {/* interactions */}
      {!!data && !isLoading && (
        <div className="flex flex-col space-y-2">
          <Card className="p-3">
            <div className="flex flex-row items-center space-x-2 w-full">
              <BaseAvatar {...data} />
              <FeedCardUserInfo seconds={seconds} {...data} />
            </div>
            <div className="my-3">{feed_content}</div>
          </Card>

          <div className="flex space-x-2 items-center">
            <FeedCardLikeButtons type="like" Icon={ChevronUp} data={likes} {...data} />
            <span>{(likes || []).length}</span>
            <FeedCardLikeButtons type="dislike" data={dislikes} Icon={ChevronDown} {...data} />

            <FeedCardInteractions id={postId} data={saves} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
