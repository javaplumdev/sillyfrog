import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import useAuth from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Forward, Bookmark } from 'lucide-react';

const FeedCardInteractions = ({ id, data, onSave, toggleShare, comments }: any) => {
  const { onActionWithAuth, userData } = useAuth();
  const { uid } = userData || {};
  const isSave = (data || []).find(({ user }: any) => user === uid);

  return (
    <div className="flex flex-row space-x-1.5" onClick={(event) => event.stopPropagation()}>
      <Link href={`/post/${id}`}>
        <Badge variant="secondary" className="px-3 py-1">
          <MessageCircle size="18" className="mr-1" /> <span>{(comments || []).length}</span>
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

      <Badge variant="secondary" className="px-3 py-1" onClick={() => toggleShare(id)}>
        <Forward size="18" />
      </Badge>
    </div>
  );
};

export default FeedCardInteractions;
