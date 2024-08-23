'use client';
import React from 'react';
import useGetLabels from '@/components/base/combobox/useGetLabels';
import BaseSkeleton from '@/components/base/skeletons/BaseSkeleton';
import useGetFeed from '../home/feed/useGetFeed';

type DataProps = {
  label: string;
};

const DiscussionsPage = () => {
  const { data, isLoading } = useGetLabels('');
  const { data: feeds, isLoading: isFeedLoading } = useGetFeed();

  return (
    <div className="w-full sm:w-[400px]">
      {!!isLoading && !!isFeedLoading && <BaseSkeleton count={10} className="h-8 p-3 mb-3" />}

      {!isLoading &&
        !isFeedLoading &&
        (data || []).map((item: DataProps) => {
          const { label } = item || {};
          const posts = feeds.filter((item) => item.label === label);

          return (
            <div className="flex justify-between hover:bg-primary hover:text-background rounded p-1 cursor-pointer mb-3 px-2">
              <span>{label}</span>
              <div className="text-sm flex items-center space-x-1">
                <span>{posts.length}</span>
                <span>{posts.length === 1 ? 'post' : 'posts'}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DiscussionsPage;
