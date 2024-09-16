'use client';
import React from 'react';
import useGetLabels from '@/components/base/combobox/useGetLabels';
import BaseSkeleton from '@/components/base/skeletons/BaseSkeleton';
import useGetFeed from '../home/feed/useGetFeed';
import { useRouter } from 'next/navigation';

type DataProps = {
  label: string;
  id: string;
};

const DiscussionsPage = () => {
  const { push } = useRouter();
  const { data, isLoading } = useGetLabels('');
  const { data: feeds, isLoading: isFeedLoading } = useGetFeed();

  return (
    <div className="w-full sm:w-[400px]">
      {!!isLoading && !!isFeedLoading && <BaseSkeleton count={10} className="h-8 p-3 mb-3" />}

      {!isLoading &&
        !isFeedLoading &&
        (data || []).map((item: DataProps, index: number) => {
          const { label, id } = item || {};
          const posts = feeds.filter((item) => item.label === label);

          return (
            <div
              key={index}
              onClick={() => push(`/discussions/${id}`)}
              className="flex justify-between hover:bg-primary hover:text-background rounded p-1 cursor-pointer mb-3 px-2"
            >
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
