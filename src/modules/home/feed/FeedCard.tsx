import React from 'react';
import FeedCardUserInfo from './FeedCardUserInfo';
import FeedCardLikeButtons from './FeedCardLikeButtons';

import { ChevronUp, ChevronDown } from 'lucide-react';
import { MessageCircle, Forward, Bookmark } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import BaseCardSkeletons from '@/components/base/skeletons/BaseCardSkeletons';

const FeedCard = (props: any) => {
  const { data, isLoading, toggleDelete, onLike, onDislike } = props;

  return (
    <React.Fragment>
      {!!isLoading && <BaseCardSkeletons count={5} />}

      {!isLoading &&
        (data || []).map((item: any, index: number) => {
          const { id, feed_content, name, photo, timestamp, userId, likes, dislikes } = item || {};

          const seconds: number = timestamp ? timestamp.seconds : null;

          return (
            <Card key={`feed-${index}`} className="p-3 flex flex-row space-x-3">
              <div className="space-y-1 items-center flex flex-col text-xs">
                <FeedCardLikeButtons
                  type="like"
                  Icon={ChevronUp}
                  onClick={onLike}
                  data={likes}
                  {...item}
                />
                <span>{(likes || []).length}</span>
                <FeedCardLikeButtons
                  type="dislike"
                  data={dislikes}
                  Icon={ChevronDown}
                  onClick={onDislike}
                  {...item}
                />
                <span>{(dislikes || []).length}</span>
              </div>
              <div className="flex flex-col w-full space-y-4">
                <div className="flex flex-row items-center space-x-2">
                  <BaseAvatar photo={photo} name={name} />
                  <FeedCardUserInfo
                    id={id}
                    name={name}
                    userId={userId}
                    seconds={seconds}
                    toggleDelete={toggleDelete}
                  />
                </div>
                <div className="break-all">{feed_content}</div>

                <div className="flex flex-row space-x-1.5">
                  <Badge variant="secondary" className="px-3 py-1">
                    <MessageCircle size="18" className="mr-1" /> <span>0</span>
                  </Badge>

                  <Badge variant="secondary" className="px-3 py-1">
                    <Bookmark size="18" className="mr-1" /> <span>0</span>
                  </Badge>

                  <Badge variant="secondary" className="px-3 py-1">
                    <Forward size="18" />
                  </Badge>
                </div>
              </div>
            </Card>
          );
        })}
    </React.Fragment>
  );
};

export default FeedCard;
