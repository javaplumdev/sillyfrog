import React, { ElementType } from 'react';
import { cn } from '@/lib/utils';
import useAuth from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';

type DataProps = { user: string };

type FeedCardLikeButtonsProps = {
  id: string;
  type?: string;
  data?: [] | undefined;
  Icon: ElementType;
  onClick: (id: string, data: DataProps[]) => Promise<void>;
};

const FeedCardLikeButtons: React.FC<FeedCardLikeButtonsProps & any> = ({
  id,
  data,
  type,
  Icon,
  onClick,
  postId,
  userId,
}) => {
  const { onActionWithAuth, userData } = useAuth();
  const { uid } = userData || {};
  const isLike = (data || []).find(({ user }: DataProps) => user === uid);

  return (
    <Badge
      variant="secondary"
      className={cn('rounded-full p-1 cursor-pointer', {
        'text-emerald-500': !!isLike && type === 'like',
        'text-red-500': !!isLike && type === 'dislike',
      })}
      onClick={onActionWithAuth(() => onClick(id, data || [], postId, userId))}
    >
      <Icon size="18" />
    </Badge>
  );
};

export default FeedCardLikeButtons;
