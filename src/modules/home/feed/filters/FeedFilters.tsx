'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const FeedFilters: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [name, setName] = useState<string>('');
  const query = searchParams.get('query');

  useEffect(() => {
    if (name) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('query', name);
      router.push(`?${newParams.toString()}`);
    }
  }, [name, router, searchParams]);

  const handleFilterClick = (filterName: string) => {
    if (filterName === '') router.replace(pathname);
    setName(filterName);
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold">Feed</h1>
      <div className="flex items-center space-x-3">
        {['', 'latest', 'top'].map((filter) => (
          <h3
            key={filter}
            className={cn('cursor-pointer', {
              'font-extrabold': filter === name || filter === query,
            })}
            onClick={() => handleFilterClick(filter)}
          >
            {filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : 'All'}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default FeedFilters;
