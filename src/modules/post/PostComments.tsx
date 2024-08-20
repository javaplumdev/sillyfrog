'use client';

import React from 'react';
import { isEmpty } from 'lodash';
import PostInputComment from './PostInputComment';
import PostFilterComments from './PostFilterComments';
import FeedCardUserInfo from '../home/feed/card/FeedCardUserInfo';

import { cn } from '@/lib/utils';
import styles from './style.module.scss';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import BaseSkeleton from '@/components/base/skeletons/BaseSkeleton';
import BaseCardSkeletons from '@/components/base/skeletons/BaseCardSkeletons';

type DataProps = { content: string; photo: string; name: string; timestamp: { seconds: number } };

type PostCommentsProps = {
  data: DataProps[];
  isLoading: boolean;
} & any;

const PostComments: React.FC<PostCommentsProps> = ({ data = [], isLoading, ...rest }) => {
  return (
    <div className="pt-3 flex flex-col space-y-4">
      <div className="text-md font-bold flex space-x-2 items-center">
        <span>Comments</span> {isLoading && <BaseSkeleton className="h-6 w-[50px]" />}
        {!isLoading && <span>{data.length}</span>}
      </div>
      <PostInputComment {...rest} />

      {!isEmpty(data) && <PostFilterComments />}

      {!!isLoading && <BaseCardSkeletons count={5} />}

      {isEmpty(data) && (
        <div className="py-24 text-center">
          <span>No comments found :(</span>
        </div>
      )}

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
