import React from 'react';

import FeedCard from './card/FeedCard';
import FeedForm from './forms/FeedForm';
import FeedFilters from './filters/FeedFilters';
import FeedShareDialog from './FeedShareDialog';
import FeedDeleteDialog from './FeedDeleteDialog';

import useSave from './useSave';
import useLike from './useLike';
import useShare from './useShare';
import useGetFeed from './useGetFeed';
import useDislike from './useDislike';
import usePostFeed from './usePostFeed';
import useDeleteFeed from './useDeleteFeed';

const Feed = () => {
  const saveProps = useSave();
  const likeProps = useLike();
  const feedProps = useGetFeed();
  const dislikeProps = useDislike();
  const postFeedProps = usePostFeed();
  const { onDelete, isDeleting, toggleDelete, isDeleteOpen } = useDeleteFeed();
  const { onShare, toggleShare, isSharing, isShareOpen, ...shareProps } = useShare();

  return (
    <div className="col-span-12 md:col-span-6 px-2 space-y-4 mb-24 mt-4">
      <FeedForm {...postFeedProps} />
      <FeedFilters />
      <FeedCard
        toggleShare={toggleShare}
        toggleDelete={toggleDelete}
        {...saveProps}
        {...likeProps}
        {...feedProps}
        {...dislikeProps}
      />

      <FeedDeleteDialog
        onSubmit={onDelete}
        isOpen={isDeleteOpen}
        isLoading={isDeleting}
        toggleOpen={toggleDelete}
      />

      <FeedShareDialog
        onSubmit={onShare}
        isOpen={isShareOpen}
        isLoading={isSharing}
        toggleOpen={toggleShare}
        {...shareProps}
      />
    </div>
  );
};

export default Feed;
