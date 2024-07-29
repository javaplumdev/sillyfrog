import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import FeedCardUserInfo from './FeedCardUserInfo';
import { ChevronUp, ChevronDown } from 'lucide-react';
import FeedCardLikeButtons from './FeedCardLikeButtons';
import { MessageCircle, Forward, Bookmark } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import BaseCardSkeletons from '@/components/base/skeletons/BaseCardSkeletons';
import { useRouter } from 'next/navigation';

const FeedCard = (props: any) => {
  const router = useRouter();
  const { theme } = useTheme();
  const { data, isLoading, toggleDelete, onLike, onDislike, countSkeleton = 5 } = props;

  return (
    <React.Fragment>
      {!!isLoading && <BaseCardSkeletons count={countSkeleton} />}

      {!isLoading &&
        (data || []).map((item: any, index: number) => {
          const { id, feed_content, name, photo, timestamp, userId, likes, dislikes, postId } =
            item || {};

          const seconds: number = timestamp ? timestamp.seconds : null;

          return (
            <Card
              key={`feed-${index}`}
              className={cn('p-3 flex flex-row space-x-3 hover:cursor-pointer', {
                'hover:bg-gray-600': theme === 'dark',
                'hover:border-gray-600': theme === 'dark',
                'hover:bg-gray-100': theme === 'light',
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
                <span>{(dislikes || []).length}</span>
              </div>
              <div className="flex flex-col w-full space-y-4">
                <div
                  className="flex flex-row items-center space-x-2"
                  onClick={(event) => event.stopPropagation()}
                >
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

                <div
                  className="flex flex-row space-x-1.5"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Link href={`/post/${postId}`}>
                    <Badge variant="secondary" className="px-3 py-1">
                      <MessageCircle size="18" className="mr-1" /> <span>0</span>
                    </Badge>
                  </Link>

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
