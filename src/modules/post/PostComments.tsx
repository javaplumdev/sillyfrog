'use client';

import React from 'react';
import PostInputComment from './PostInputComment';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import FeedCardUserInfo from '../home/feed/card/FeedCardUserInfo';

import styles from './style.module.scss';
import { cn } from '@/lib/utils';

const PostComments = (props: any) => {
  const { data, isLoading, ...rest } = props;

  return (
    <div className="pt-3 flex flex-col space-y-4">
      <span className="text-md font-bold">Comments {(data || []).length}</span>
      <PostInputComment {...rest} />

      <div className={cn('flex flex-col space-y-4', styles['border-parent'])}>
        {data.map((item: any, index: number) => {
          const { content, photo, name, timestamp = { seconds: 0 } } = item || {};
          const sec: number = timestamp.seconds;
          return (
            <div key={`comment-${index}`} className={cn('mb-3 p-3', styles['border-child'])}>
              <div className="flex flex-row space-x-2 my-3">
                <BaseAvatar photo={photo} name={name} />
                <FeedCardUserInfo seconds={sec} name={name} />
              </div>

              <div>{content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostComments;
