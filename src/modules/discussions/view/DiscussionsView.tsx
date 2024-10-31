'use client';
import React from 'react';

import FeedCard from '@/modules/home/feed/card/FeedCard';

import useSave from '@/modules/home/feed/useSave';
import useLike from '@/modules/home/feed/useLike';
import useShare from '@/modules/home/feed/useShare';
import useGetFeed from '@/modules/home/feed/useGetFeed';
import useDislike from '@/modules/home/feed/useDislike';
import useGetDiscussionsById from './useGetDiscussionsById';
import useDeleteFeed from '@/modules/home/feed/useDeleteFeed';

const DiscussionsView = () => {
  const { data, isLoading } = useGetDiscussionsById();
  const saveProps = useSave();
  const likeProps = useLike();
  const dislikeProps = useDislike();
  const { toggleDelete } = useDeleteFeed();
  const { loadMore, hasMore } = useGetFeed();
  const { onShare, toggleShare, isSharing, isShareOpen, ...shareProps } = useShare();

  return (
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
  );
};

export default DiscussionsView;
