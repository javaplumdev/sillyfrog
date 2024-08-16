import React from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

const BaseSkeleton: React.FC<{ className?: string }> = ({ className = 'h-8 w-[200px]' }) => {
  return (
    <div>
      <Skeleton className={cn(className)} />
    </div>
  );
};

export default BaseSkeleton;
