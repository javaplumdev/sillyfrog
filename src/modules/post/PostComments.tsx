'use client';

import React from 'react';
import PostInputComment from './PostInputComment';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import FeedCardUserInfo from '../home/feed/card/FeedCardUserInfo';

import styles from './style.module.scss';
import { cn } from '@/lib/utils';
import BaseSkeleton from '@/components/base/skeletons/BaseSkeleton';
import BaseCardSkeletons from '@/components/base/skeletons/BaseCardSkeletons';

type DataProps = { content: string; photo: string; name: string; timestamp: { seconds: number } };

const PostComments: React.FC<
  {
    data: DataProps[];
    isLoading: boolean;
  } & any
> = ({ data = [], isLoading, ...rest }) => {
  return (
    <div className="pt-3 flex flex-col space-y-4">
      <div className="text-md font-bold flex space-x-2 items-center">
        <span>Comments</span> {isLoading && <BaseSkeleton className="h-6 w-[50px]" />}
        {!isLoading && <span>{data.length}</span>}
      </div>
      <PostInputComment {...rest} />

      {!!isLoading && <BaseCardSkeletons count={5} />}

      <div className={cn('flex flex-col space-y-4', styles['border-parent'])}>
        {!isLoading &&
          data.map((item: DataProps, index: number) => {
            const { content, photo, name, timestamp = { seconds: 0 } } = item || {};
            const sec: number = timestamp.seconds;
            return (
              <div key={`comment-${index}`} className={cn('mb-3 p-3', styles['border-child'])}>
                <div className="flex flex-row space-x-2 my-3">
                  <BaseAvatar photo={photo} name={name} />
                  <FeedCardUserInfo seconds={sec} name={name} toggleDelete={() => {}} />
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
