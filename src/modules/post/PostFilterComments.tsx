import React from 'react';
import { startCase } from 'lodash';
import { Filter, Flame, Link } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useQuery } from '@/hooks/useQuery';

// TODO: Fix filter

const PostFilterComments = () => {
  const { onHandleQuery, query } = useQuery();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="max-w-max flex space-x-2">
          <Filter size="18" />
          <span>{startCase(query) || 'Relevant'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => onHandleQuery('')}>
            <Link className="mr-2 h-4 w-4" /> <span>Relevant</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => onHandleQuery('latest')}>
            <Flame className="mr-2 h-4 w-4" />
            <span>Latest</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostFilterComments;
