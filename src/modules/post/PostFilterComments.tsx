import React from 'react';
import { startCase } from 'lodash';
import { Filter } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

// TODO: Fix filter

const PostFilterComments = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = React.useState<string>('');
  const query = searchParams.get('query') || '';

  React.useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (name) {
      newParams.set('query', name);
    } else {
      newParams.delete('query');
    }
    router.push(`?${newParams.toString()}`);
  }, [name, router, searchParams]);

  const handleFilterClick = (filterName: string) => setName(filterName);

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
          <DropdownMenuItem onClick={() => handleFilterClick('')}>Relevant</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleFilterClick('latest')}>Latest</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostFilterComments;
