import React from 'react';

import FeedCard from './FeedCard';
import FeedForm from './FeedForm';
import FeedFilters from './FeedFilters';
import FeedDeleteDialog from './FeedDeleteDialog';

import useGetFeed from './useGetFeed';
import usePostFeed from './usePostFeed';
import useDeleteFeed from './useDeleteFeed';

const Feed = () => {
  const feedProps = useGetFeed();
  const postFeedProps = usePostFeed();
  const { onDelete, isDeleting, toggleDelete, isDeleteOpen } = useDeleteFeed();

  return (
    <div className="col-span-12 md:col-span-6 px-2 space-y-4 mb-24 mt-4">
      <FeedForm {...postFeedProps} />
      <FeedFilters />
      <FeedCard {...feedProps} toggleDelete={toggleDelete} />

      <FeedDeleteDialog
        onSubmit={onDelete}
        isOpen={isDeleteOpen}
        isLoading={isDeleting}
        toggleOpen={toggleDelete}
      />
    </div>
  );
};

export default Feed;
