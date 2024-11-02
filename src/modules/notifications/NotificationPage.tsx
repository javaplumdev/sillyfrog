'use client';

import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import { Card } from '@/components/ui/card';
import { useNotification } from '@/hooks/useNotifications';
import { dateLabel, timeDifference } from '@/lib/dates';
import React from 'react';

const NotificationPage = () => {
  const { data } = useNotification();

  return (
    <div>
      {data.map((item: any, index: number) => {
        const { from, type, photo, name, timestamp } = item || {};

        const seconds: number = timestamp.seconds || 0;

        const sec = seconds || 0;

        return (
          <Card key={`${index}`} className="w-full sm:w-[520px] p-3 mb-3 flex flex-col space-y-3">
            <div className="flex flex-row items-center">
              <div className="mr-3">
                <BaseAvatar photo={photo} name={name || ''} />
              </div>{' '}
              <div>
                <span className="text-xs">
                  {dateLabel(sec)} - {timeDifference(sec)}
                </span>
                <div>
                  {name}
                  <span className="ml-1">{type === 'like' ? 'likes' : 'comments'} your post.</span>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default NotificationPage;
