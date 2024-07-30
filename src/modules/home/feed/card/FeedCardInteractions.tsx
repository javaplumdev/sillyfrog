import React from 'react';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Forward, Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeedCardInteractions = ({ id, postId, data, onSave, toggleShare }: any) => {
  const { onActionWithAuth, userData } = useAuth();
  const { uid } = userData || {};

  const isSave = (data || []).find(({ user }: any) => user === uid);

  return (
    <div className="flex flex-row space-x-1.5" onClick={(event) => event.stopPropagation()}>
      <Link href={`/post/${postId}`}>
        <Badge variant="secondary" className="px-3 py-1">
          <MessageCircle size="18" className="mr-1" /> <span>0</span>
        </Badge>
      </Link>

      <Badge
        variant="secondary"
        className="px-3 py-1"
        onClick={onActionWithAuth(() => onSave(id, data))}
      >
        <Bookmark size="18" className={cn('mr-1', { 'text-amber-500': !!isSave })} />{' '}
        <span>{(data || []).length}</span>
      </Badge>

      <Badge variant="secondary" className="px-3 py-1" onClick={() => toggleShare(postId)}>
        <Forward size="18" />
      </Badge>
    </div>
  );
};

export default FeedCardInteractions;
