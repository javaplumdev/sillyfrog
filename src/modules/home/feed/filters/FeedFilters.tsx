'use client';

import { cn } from '@/lib/utils';
import { useQuery } from '@/hooks/useQuery';
import { startCase } from 'lodash';
import { Flame, Link } from 'lucide-react';

const filters = [
  { name: '', Icon: <Link size="16" /> },
  { name: 'latest', Icon: <Flame size="16" /> },
];

const FeedFilters: React.FC = () => {
  const { onHandleQuery, name, query } = useQuery();

  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold">Feed</h1>
      <div className="flex items-center space-x-3">
        {(filters || []).map(({ name: filterName, Icon }, index: number) => (
          <h3
            key={index}
            className={cn('cursor-pointer flex space-x-2 items-center', {
              'font-extrabold': filterName === name || filterName === query,
            })}
            onClick={() => onHandleQuery(filterName)}
          >
            {Icon}
            <span>{filterName ? startCase(filterName) : 'Relevant'}</span>
          </h3>
        ))}
      </div>
    </div>
  );
};

export default FeedFilters;
