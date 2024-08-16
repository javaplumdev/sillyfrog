import React from 'react';
import { range } from 'lodash';
import { Skeleton } from '@/components/ui/skeleton';

interface BaseSkeletonsProps {
  count?: number;
}

const BaseCardSkeletons: React.FC<BaseSkeletonsProps> = (props) => {
  const { count = 1 } = props;

  const mapItems = (num: number) => range(1, num + 1);

  const skeletonsToMap = mapItems(count);

  return skeletonsToMap.map((_, index) => (
    <div key={`card-skeletons-${index}`} className="flex flex-col space-y-3 my-3">
      <Skeleton className="h-[125px] w-full" />
    </div>
  ));
};

export default BaseCardSkeletons;
