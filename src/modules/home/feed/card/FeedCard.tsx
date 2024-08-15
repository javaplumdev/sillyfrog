'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { ChevronUp, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import BaseCardSkeletons from '@/components/base/skeletons/BaseCardSkeletons';

import FeedCardUserInfo from './FeedCardUserInfo';
import FeedCardLikeButtons from './FeedCardLikeButtons';
import FeedCardInteractions from './FeedCardInteractions';

const FeedCard: React.FC<
  {
    data: FeedList;
    onLike: () => void;
    onSave: () => void;
    isLoading: boolean;
    onDislike: () => void;
    toggleShare: () => void;
    toggleDelete: () => void;
    countSkeleton: number;
  } & any
> = (props) => {
  const router = useRouter();
  const { theme } = useTheme();

  const {
    data,
    onLike,
    onSave,
    isLoading,
    onDislike,
    toggleShare,
    toggleDelete,
    countSkeleton = 5,
  } = props;

  return (
    <React.Fragment>
      {!!isLoading && <BaseCardSkeletons count={countSkeleton} />}

      {!isLoading &&
        (data || []).map((item: Feed, index: number) => {
          const {
            saves,
            likes,
            postId,
            dislikes,
            feed_content,
            timestamp = { seconds: 0 },
          } = item || {};

          const seconds: number = timestamp.seconds || 0;

          return (
            <Card
              key={`feed-${index}`}
              className={cn('p-3 flex flex-row space-x-3 hover:cursor-pointer', {
                'hover:bg-gray-600': theme === 'dark',
                'hover:border-gray-600': theme === 'dark',
                'hover:bg-gray-100': theme === 'light',
                'hover:border-gray-100': theme === 'light',
              })}
              onClick={() => router.push(`/post/${postId}`)}
            >
              <div
                className="space-y-1 items-center flex flex-col text-xs"
                onClick={(event) => event.stopPropagation()}
              >
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
                {/* <span>{(dislikes || []).length}</span> */}
              </div>
              <div className="flex flex-col w-full space-y-4">
                <div
                  className="flex flex-row items-center space-x-2"
                  onClick={(event) => event.stopPropagation()}
                >
                  <BaseAvatar {...item} />
                  <FeedCardUserInfo seconds={seconds} toggleDelete={toggleDelete} {...item} />
                </div>
                <div className="break-all">{feed_content}</div>

                <FeedCardInteractions
                  id={postId}
                  data={saves}
                  onSave={onSave}
                  toggleShare={toggleShare}
                  {...item}
                />
              </div>
            </Card>
          );
        })}
    </React.Fragment>
  );
};

export default FeedCard;
