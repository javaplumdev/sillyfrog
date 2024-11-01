'use client';

import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import { Card } from '@/components/ui/card';
import { useNotification } from '@/hooks/useNotifications';
import React from 'react';

const NotificationPage = () => {
  const { data } = useNotification();

  return (
    <div>
      {data.map((item: any, index: number) => {
        const { from, type, photo } = item || {};

        return (
          <Card key={`${index}`} className="w-full sm:w-[520px] p-3 mb-3 flex items-center">
            <div className="mr-3">
              <BaseAvatar photo={photo} name={from || ''} />
            </div>{' '}
            <div>
              {from}
              <span className="ml-1">{type === 'like' ? 'likes' : 'comments'} your post.</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default NotificationPage;
