import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { GoCommentDiscussion } from 'react-icons/go';
import useGetLabels from '@/components/base/combobox/useGetLabels';
import BaseSkeleton from '@/components/base/skeletons/BaseSkeleton';

type TagsProps = {
  label: string;
  id: string;
};

const TopDiscussion: React.FC<{ className: string }> = ({ className }) => {
  const { data, isLoading } = useGetLabels('');

  let _data: TagsProps[] = [];

  // rest of the data without "ribbit" label
  const restData = (data || []).filter((item: TagsProps) => item.label !== 'ribbit');

  // get the label of "ribbit"
  const isRibbit = (data || []).find((item: TagsProps) => item.label === 'ribbit');

  // add isRibbit to the start of the restData array
  if (isRibbit) restData.unshift(isRibbit);

  // assign the modified restData to _data
  _data = restData;

  return (
    <div className={cn('pt-5 w-full text-start px-2 sm:px-0', className)}>
      <div className="flex space-x-2">
        <GoCommentDiscussion size="19" />
        <h3 className="font-bold mb-3">Top Discussions</h3>
      </div>
      {!!isLoading && <BaseSkeleton count={10} className="h-8 w-full mb-3" />}

      <div className="flex flex-col space-y-3">
        {!isLoading &&
          (_data || []).slice(0, 10).map(({ label, id }: TagsProps) => {
            return (
              <p
                key={`top-discussion-${id}`}
                className="hover:bg-primary hover:text-background rounded p-1 cursor-pointer"
              >
                {label === 'ribbit' && <span>🐸</span>} {label}
              </p>
            );
          })}
      </div>
      <div className="text-xs my-3">
        <Badge>see more...</Badge>
      </div>
    </div>
  );
};

export default TopDiscussion;
