import React from 'react';
import { cn } from '@/lib/utils';
import useAuth from '@/hooks/useAuth';

const FeedCardLikeButtons = ({ Icon, onClick, id, data, type }: any) => {
  const { onActionWithAuth, userData } = useAuth();
  const { uid } = userData || {};
  const isLike = (data || []).find(({ user }: any) => user === uid);

  return (
    <div
      className={cn(
        'border rounded-full p-1 cursor-pointer',
        {
          'text-white': !!isLike && type === 'like',
          'bg-secondary': !!isLike && type === 'like',
        },
        {
          'text-white': !!isLike && type === 'dislike',
          'bg-secondary': !!isLike && type === 'dislike',
        }
      )}
      onClick={onActionWithAuth(() => onClick(id, data))}
    >
      <Icon size="16" />
    </div>
  );
};

export default FeedCardLikeButtons;
