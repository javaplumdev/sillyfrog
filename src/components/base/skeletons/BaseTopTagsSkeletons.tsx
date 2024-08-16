import React from 'react';
import { range } from 'lodash';
import { Skeleton } from '@/components/ui/skeleton';

interface BaseSkeletonsProps {
  count: number;
}

const BaseTopTagsSkeletons: React.FC<BaseSkeletonsProps> = (props) => {
  const { count } = props;

  const mapItems = (num: number) => range(1, num + 1);

  const skeletonsToMap = mapItems(count);

  return skeletonsToMap.map((_, index) => (
    <div key={`card-skeletons-${index}`} className="flex flex-wrap space-y-1">
      <Skeleton className="h-4 w-[100px]" />
    </div>
  ));
};

export default BaseTopTagsSkeletons;
