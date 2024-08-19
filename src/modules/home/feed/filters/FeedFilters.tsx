'use client';

import { cn } from '@/lib/utils';
import { useQuery } from '@/hooks/useQuery';

const FeedFilters: React.FC = () => {
  const { onHandleQuery, name, query } = useQuery();

  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold">Feed</h1>
      <div className="flex items-center space-x-3">
        {['', 'latest'].map((filter) => (
          <h3
            key={filter}
            className={cn('cursor-pointer', {
              'font-extrabold': filter === name || filter === query,
            })}
            onClick={() => onHandleQuery(filter)}
          >
            {filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : 'Relevant'}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default FeedFilters;
