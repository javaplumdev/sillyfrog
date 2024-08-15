'use client';

import * as React from 'react';
import { isEmpty } from 'lodash';
import { Plus, Tags } from 'lucide-react';

import BaseButton from '../buttons/BaseButton';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';

const _labels = ['question', 'ribbit'];

type ValueProps = {
  feed_content: string;
  label: string;
};

export default function ComboboxDropdownMenu({
  setValue,
  getValues, // <--- actual data to be passed on firebase
}: UseFormReturn<ValueProps, {}, undefined>) {
  const [open, setOpen] = React.useState<boolean>(false);

  // input value
  const [label, setLabel] = React.useState<string>('');

  // values
  const [labels, setLabels] = React.useState<string[]>(_labels);

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
                      placeholder="Filter / Add label..."
                      onChange={(e) => setLabel(e.target.value)}
                    />
                    <BaseButton
                      icon={<Plus size="18" />}
                      onClick={() => {
                        if (label.trim() === '') return;

                        setLabels((prev) => [...prev, label.trim()]);
                        setLabel(''); // Clear the input field
                      }}
                    >
                      Add
                    </BaseButton>
                  </div>

                  <div className="text-sm">
                    {(labels || []).map((item: string, index: number) => {
                      if (isEmpty(labels)) return 'No results found';

                      return (
                        <div
                          key={index}
                          className="flex flex-col p-2 hover:bg-accent hover:text-accent-foreground hover:cursor-pointer rounded-md"
                          onClick={() => {
                            setValue('label', item);
                            setOpen(false);
                          }}
                        >
                          {item}
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
