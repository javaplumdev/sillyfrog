import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { GoCommentDiscussion } from 'react-icons/go';
import useGetLabels from '@/components/base/combobox/useGetLabels';
import BaseSkeleton from '@/components/base/skeletons/BaseSkeleton';
import useGetFeed from '../feed/useGetFeed';
import { useRouter } from 'next/navigation';

type TagsProps = {
  label: string;
  id: string;
};

const TopDiscussion: React.FC<{ className: string }> = ({ className }) => {
  const { push } = useRouter();
  const { data, isLoading } = useGetLabels('');
  const { data: feeds } = useGetFeed();

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
            const posts = feeds.filter((item) => item.label === label);

            return (
              <div
                key={`top-discussion-${id}`}
                onClick={() => push(`/discussions/${id}`)}
                className="flex justify-between hover:bg-primary hover:text-background rounded p-1 cursor-pointer px-2"
              >
                <span>
                  {label === 'ribbit' && '🐸'} {label}
                </span>
                <div className="text-xs flex items-center space-x-1">
                  <span>{posts.length}</span> <span>{posts.length === 1 ? 'post' : 'posts'}</span>
                </div>
              </div>
            );
          })}
      </div>
      <div className="text-xs my-3 px-2">
        <Link href="/discussions">
          <Badge>see more...</Badge>
        </Link>
      </div>
    </div>
  );
};

export default TopDiscussion;
