import React from 'react';
import { Card } from '@/components/ui/card';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import { dateLabel, timeDifference } from '@/lib/dates';
import { ChevronUp, ChevronDown, EllipsisVertical } from 'lucide-react';
import { MessageCircle, Forward, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import BaseCardSkeletons from '@/components/base/skeletons/BaseCardSkeletons';

const UserInfo = ({ name, seconds }: any) => (
  <div className="flex items-center justify-between w-full">
    <div className="flex flex-col">
      <span className="font-bold">{name}</span>
      <span className="text-xs">
        {dateLabel(seconds)} - {timeDifference(seconds)}
      </span>
    </div>
    <EllipsisVertical size="22" />
  </div>
);

const LikeButtons = ({ Icon }: any) => (
  <div className="border-2 rounded-full p-1">
    <Icon size="18" />
  </div>
);

const FeedCard = (props: any) => {
  const { data, isLoading } = props;

  return (
    <React.Fragment>
      {!!isLoading && <BaseCardSkeletons count={5} />}

      {!isLoading &&
        (data || []).map((item: any, index: number) => {
          const { feed_content, name, photo, timestamp } = item || {};

          const seconds: number = timestamp ? timestamp.seconds : null;

          return (
            <Card key={`feed-${index}`} className="p-3 flex flex-row space-x-3">
              <div className="space-y-1 items-center flex flex-col text-sm">
                <LikeButtons Icon={ChevronUp} />
                <span>0</span>
                <LikeButtons Icon={ChevronDown} />
              </div>
              <div className="flex flex-col w-full space-y-4">
                <div className="flex flex-row items-center space-x-2">
                  <BaseAvatar photo={photo} name={name} />
                  <UserInfo name={name} seconds={seconds} />
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
