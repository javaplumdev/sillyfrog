import React from 'react';
import { isEqual } from 'lodash';
import useAuth from '@/hooks/useAuth';
import { Trash, Flag } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import { dateLabel, timeDifference } from '@/lib/dates';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

type FeedCardUserInfoProps = {
  id?: string;
  name?: string;
  number?: number | null;
  userId?: string;
  seconds: number | null;
  toggleDelete: (id: string) => void;
};

const FeedCardUserInfo: React.FC<FeedCardUserInfoProps> = ({
  id,
  name,
  userId,
  seconds,
  toggleDelete,
}) => {
  const { userData, isAuth } = useAuth();
  const { uid } = userData || {};

  const sec = seconds || 0;

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col">
        <span className="font-bold break-all">{name}</span>
        <span className="text-xs">
          {dateLabel(sec)} - {timeDifference(sec)}
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

            {isEqual(uid, userId) && isAuth && (
              <React.Fragment>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="cursor-pointer text-red-500"
                  onClick={() => toggleDelete(id || '')}
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

export default FeedCardUserInfo;
