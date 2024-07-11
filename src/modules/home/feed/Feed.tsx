import React from 'react';

import FeedCard from './FeedCard';
import FeedForm from './FeedForm';
import FeedFilters from './FeedFilters';

import useAuth from '@/hooks/useAuth';
import useGetFeed from './useGetFeed';
import usePostFeed from './usePostFeed';

const Feed = () => {
  const { userData, isAuth } = useAuth();

  const feedProps = useGetFeed();
  const postFeedProps = usePostFeed();

  return (
    <div className="col-span-12 md:col-span-6 p-2">
      <FeedForm {...postFeedProps} />
      <FeedFilters />
      <FeedCard />
    </div>
  );
};

export default Feed;
