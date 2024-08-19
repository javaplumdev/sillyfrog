'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const FeedFilters: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState<string>('');
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (name) {
      newParams.set('query', name);
    } else {
      newParams.delete('query');
    }
    router.push(`?${newParams.toString()}`);
  }, [name, router, searchParams]);

  const handleFilterClick = (filterName: string) => {
    setName(filterName);
  };

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
            onClick={() => handleFilterClick(filter)}
          >
            {filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : 'Relevant'}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default FeedFilters;
