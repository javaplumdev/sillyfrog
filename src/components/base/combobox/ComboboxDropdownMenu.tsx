'use client';

import * as React from 'react';
import { isEmpty, lowerCase } from 'lodash';
import { Plus, Tags } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import BaseLoader from '../loader/BaseLoader';
import BaseButton from '../buttons/BaseButton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuSub,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import useGetLabels from './useGetLabels';
import useAddLabels from './useAddLabels';
import { sonnerToast } from '@/lib/toast';

type ValueProps = { feed_content: string; label: string };

export default function ComboboxDropdownMenu({
  setValue,
  getValues, // <--- actual data to be passed on firebase
}: UseFormReturn<ValueProps, {}, undefined>) {
  const [label, setLabel] = React.useState<string>('');
  const [open, setOpen] = React.useState<boolean>(false);
  const [labels, setLabels] = React.useState<string[]>([]);

  const { data, isLoading } = useGetLabels(label);
  const { isAdding } = useAddLabels();

  // values

  React.useEffect(() => setLabels(data), [data]);

  const handleSearch = (search: string) => {
    setLabel(search);

    if (search.trim() === '') {
      setLabels(data);
    } else {
      const lowered = search.toLowerCase();
      const filtered = data.filter(({ label }: { label: string }) =>
        label.toLowerCase().includes(lowered)
      );

      setLabels(filtered);
    }
  };

  return (
    <div>
      <div className="w-full flex items-center">
        <p className="text-sm font-medium leading-none">
          <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
            {getValues('label')}
          </span>
        </p>
        <DropdownMenu
          open={open}
          onOpenChange={() => {
            setOpen(!open);
            setLabel('');
            setLabels(data);
          }}
        >
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Tags className="mr-2 h-4 w-4" />
              Apply label
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <div className="sm:w-[400px] p-2 flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="text"
                      value={label}
                      placeholder="Search / Add label..."
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                    <BaseButton
                      disabled={isAdding}
                      icon={<Plus size="18" />}
                      onClick={() => {
                        if (label.trim() === '') return;

                        // checks if the data already exists
                        const exists = data.find((item: { label: string }) => {
                          const { label: text } = item || {};
                          return text === lowerCase(label);
                        });

                        // if label is more than 20, it should be less than 20
                        if (label.length >= 20) {
                          return sonnerToast('error', `"${label}" must be less than 20 characters`);
                        }

                        if (exists)
                          sonnerToast(
                            'error',
                            `"${label}" already exists. Select label if you wish to add`
                          );

                        setLabel('');
                        setOpen(false);
                        setValue('label', lowerCase(label));
                      }}
                    >
                      Add
                    </BaseButton>
                  </div>

                  <div className="text-sm">
                    <div className="text-center">
                      {!!isLoading && <BaseLoader />}

                      {isEmpty(labels) && <div className="p-2">No results found</div>}
                    </div>

                    {!isLoading &&
                      (labels || []).slice(0, 6).map(({ label }: any, index: number) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col p-2 hover:bg-accent hover:text-accent-foreground hover:cursor-pointer rounded-md"
                            onClick={() => {
                              setValue('label', label);
                              setOpen(false);
                              setLabels(data);
                            }}
                          >
                            {label}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
