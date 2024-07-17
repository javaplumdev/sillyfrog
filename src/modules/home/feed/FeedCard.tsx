import React from 'react';
import { Card } from '@/components/ui/card';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import { dateLabel, timeDifference } from '@/lib/dates';
import { ChevronUp, ChevronDown } from 'lucide-react';

const UserInfo = ({ name, seconds }: any) => (
  <div className="flex flex-col">
    <span className="font-bold">{name}</span>
    <span className="text-xs">
      {dateLabel(seconds)} - {timeDifference(seconds)}
    </span>
  </div>
);

const LikeButtons = ({ Icon }: any) => (
  <div className="border-2 rounded-full p-1">
    <Icon size="22" />
  </div>
);

const FeedCard = (props: any) => {
  const { data } = props;

  return (
    <React.Fragment>
      {(data || []).map((item: any, index: number) => {
        const { feed_content, name, photo, timestamp } = item || {};

        const seconds: number = timestamp ? timestamp.seconds : null;

        return (
          <Card key={`feed-${index}`} className="p-3 flex flex-row space-x-3">
            <div className="space-y-2">
              <LikeButtons Icon={ChevronUp} />
              <LikeButtons Icon={ChevronDown} />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center space-x-2 mb-4">
                <BaseAvatar photo={photo} name={name} />
                <UserInfo name={name} seconds={seconds} />
              </div>
              {feed_content}
            </div>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default FeedCard;
