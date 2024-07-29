import React from 'react';
import { isEqual } from 'lodash';
import useAuth from '@/hooks/useAuth';
import { Trash, Flag } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { dateLabel, timeDifference } from '@/lib/dates';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import { MessageCircle, Forward, Bookmark } from 'lucide-react';
import { ChevronUp, ChevronDown, EllipsisVertical } from 'lucide-react';
import BaseCardSkeletons from '@/components/base/skeletons/BaseCardSkeletons';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const UserInfo = ({ id, name, seconds, toggleDelete, userId }: any) => {
  const { userData } = useAuth();
  const { uid } = userData || {};
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col">
        <span className="font-bold">{name}</span>
        <span className="text-xs">
          {dateLabel(seconds)} - {timeDifference(seconds)}
        </span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <EllipsisVertical size="22" className="cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              <Flag className="mr-2 h-4 w-4" />
              <span>Report</span>
              <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
            </DropdownMenuItem>

            {isEqual(uid, userId) && (
              <React.Fragment>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="cursor-pointer text-red-500"
                  onClick={() => toggleDelete(id)}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                  <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
              </React.Fragment>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const LikeButtons = ({ Icon, onClick, id, data, type }: any) => {
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

const FeedCard = (props: any) => {
  const { data, isLoading, toggleDelete, onLike, onDislike } = props;

  return (
    <React.Fragment>
      {!!isLoading && <BaseCardSkeletons count={5} />}

      {!isLoading &&
        (data || []).map((item: any, index: number) => {
          const { id, feed_content, name, photo, timestamp, userId, likes, dislikes } = item || {};

          const seconds: number = timestamp ? timestamp.seconds : null;

          return (
            <Card key={`feed-${index}`} className="p-3 flex flex-row space-x-3">
              <div className="space-y-1 items-center flex flex-col text-xs">
                <LikeButtons type="like" Icon={ChevronUp} onClick={onLike} data={likes} {...item} />
                <span>{(likes || []).length}</span>
                <LikeButtons
                  type="dislike"
                  data={dislikes}
                  Icon={ChevronDown}
                  onClick={onDislike}
                  {...item}
                />
                <span>{(dislikes || []).length}</span>
              </div>
              <div className="flex flex-col w-full space-y-4">
                <div className="flex flex-row items-center space-x-2">
                  <BaseAvatar photo={photo} name={name} />
                  <UserInfo
                    id={id}
                    name={name}
                    userId={userId}
                    seconds={seconds}
                    toggleDelete={toggleDelete}
                  />
                </div>
                <div className="break-all">{feed_content}</div>

                <div className="flex flex-row space-x-1.5">
                  <Badge variant="secondary" className="px-3 py-1">
                    <MessageCircle size="18" className="mr-1" /> <span>0</span>
                  </Badge>

                  <Badge variant="secondary" className="px-3 py-1">
                    <Bookmark size="18" className="mr-1" /> <span>0</span>
                  </Badge>

                  <Badge variant="secondary" className="px-3 py-1">
                    <Forward size="18" />
                  </Badge>
                </div>
              </div>
            </Card>
          );
        })}
    </React.Fragment>
  );
};

export default FeedCard;
