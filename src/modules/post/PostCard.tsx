import React from 'react';

import { ChevronDown, ChevronUp } from 'lucide-react';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import FeedCardUserInfo from '../home/feed/card/FeedCardUserInfo';
import FeedCardLikeButtons from '../home/feed/card/FeedCardLikeButtons';
import FeedCardInteractions from '../home/feed/card/FeedCardInteractions';
import BaseCardSkeletons from '@/components/base/skeletons/BaseCardSkeletons';

type dataPayload = { id: string; user: string };

export type DataProps = {
  saves?: [];
  likes?: [];
  dislikes?: [];
  name?: string;
  photo?: string;
  postId?: string;
  feed_content?: string;
};

const PostCard: React.FC<{
  seconds: number;
  data: DataProps | any;
  isLoading: boolean;
  isDisliking: boolean;
  toggleShare: () => void;
  toggleDelete: () => void;
  onLike: (id: string, data: dataPayload[]) => Promise<void>;
  onDislike: (id: string, data: dataPayload[]) => Promise<void>;
}> = ({ data, isLoading, seconds, toggleDelete, toggleShare, onDislike, onLike }) => {
  const { saves, likes, postId, dislikes, feed_content } = data || {};

  return (
    <div>
      {!!isLoading && <BaseCardSkeletons count={1} />}
      {!!data && !isLoading && (
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row items-center space-x-2 w-full">
            <BaseAvatar {...data} />
            <FeedCardUserInfo seconds={seconds} toggleDelete={toggleDelete} {...data} />
          </div>
          <div className="my-3">{feed_content}</div>

          <div className="flex space-x-2 items-center">
            <FeedCardLikeButtons
              type="like"
              data={likes}
              Icon={ChevronUp}
              onClick={onLike}
              {...data}
            />
            <span>{(likes || []).length}</span>
            <FeedCardLikeButtons
              type="dislike"
              data={dislikes}
              Icon={ChevronDown}
              onClick={onDislike}
              {...data}
            />
            <FeedCardInteractions id={postId} data={saves} toggleShare={toggleShare} {...data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
