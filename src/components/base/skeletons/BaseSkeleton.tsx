import React from 'react';
import { cn } from '@/lib/utils';
import { range } from 'lodash';
import { Skeleton } from '@/components/ui/skeleton';

const BaseSkeleton: React.FC<{ className?: string; count?: number }> = ({
  className = 'h-8 w-[200px]',
  count = 1,
}) => {
  const mapItems = (num: number) => range(1, num + 1);
  const skeletonsToMap = mapItems(count);

  return (
    <div>
      {skeletonsToMap.map((_, index) => (
        <Skeleton key={index} className={cn(className)} />
      ))}
    </div>
  );
};

export default BaseSkeleton;
