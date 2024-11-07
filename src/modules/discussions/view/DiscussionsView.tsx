'use client';
import React from 'react';
import { isEmpty } from 'lodash';

import FeedCard from '@/modules/home/feed/card/FeedCard';

import useSave from '@/modules/home/feed/useSave';
import useLike from '@/modules/home/feed/useLike';
import useShare from '@/modules/home/feed/useShare';
import useGetFeed from '@/modules/home/feed/useGetFeed';
import useDislike from '@/modules/home/feed/useDislike';
import useGetDiscussionsById from './useGetDiscussionsById';
import useDeleteFeed from '@/modules/home/feed/useDeleteFeed';
import { useParams } from 'next/navigation';
import { itemDecodeURI } from '@/lib/strings';

const DiscussionsView = () => {
  const { id: paramsId } = useParams();

  const { data, isLoading } = useGetDiscussionsById();
  const saveProps = useSave();
  const likeProps = useLike();
  const dislikeProps = useDislike();
  const { toggleDelete } = useDeleteFeed();
  const { loadMore, hasMore } = useGetFeed();
  const { onShare, toggleShare, isSharing, isShareOpen, ...shareProps } = useShare();

  if (isEmpty(data)) {
    return (
      <div className="flex items-center justify-center space-x-2 h-screen text-xl break-all">
        <span>No results found for</span> <strong>{itemDecodeURI(paramsId)}</strong> :(
      </div>
    );
  }

  return (
    <>
      <h3 className="my-3">
        Results for <strong>{itemDecodeURI(paramsId)}</strong>
      </h3>

      <FeedCard
        data={data}
        isLoading={isLoading}
        hasMore={hasMore}
        loadMore={loadMore}
        toggleShare={toggleShare}
        toggleDelete={toggleDelete}
        {...saveProps}
        {...likeProps}
        {...dislikeProps}
      />
    </>
  );
};

export default DiscussionsView;
