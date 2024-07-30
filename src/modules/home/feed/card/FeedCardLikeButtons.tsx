import React from 'react';
import { cn } from '@/lib/utils';
import useAuth from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';

const FeedCardLikeButtons = ({ Icon, onClick, id, data, type }: any) => {
  const { onActionWithAuth, userData } = useAuth();
  const { uid } = userData || {};
  const isLike = (data || []).find(({ user }: any) => user === uid);

  return (
    <Badge
      variant="secondary"
      className={cn('rounded-full p-1 cursor-pointer', {
        'text-emerald-500': !!isLike && type === 'like',
        'text-red-500': !!isLike && type === 'dislike',
      })}
      onClick={onActionWithAuth(() => onClick(id, data))}
    >
      <Icon size="18" />
    </Badge>
  );
};

export default FeedCardLikeButtons;
