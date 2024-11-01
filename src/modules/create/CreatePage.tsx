import BaseButton from '@/components/base/buttons/BaseButton';
import ComboboxDropdownMenu from '@/components/base/combobox/ComboboxDropdownMenu';

import React from 'react';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

type CreatePageTypes = {
  isPostingFeed: boolean;
  onSubmitPostFeed: () => void;
  postFeedForm: UseFormReturn<{ feed_content: string; label: string }, {}, undefined>;
};

const CreatePage: React.FC<CreatePageTypes> = (props) => {
  const { postFeedForm, isPostingFeed, onSubmitPostFeed } = props;

  const { handleSubmit, control } = postFeedForm || {};

  return (
    <Card className="w-full sm:w-[520px] p-3">
      <div className="grid gap-4 py-4">
        <Form {...postFeedForm}>
          <form onSubmit={handleSubmit(onSubmitPostFeed)} className="space-y-4">
            <FormField
              control={control}
              name="feed_content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      id="feed_content"
                      placeholder="Type your message here."
                      rows={2}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <ComboboxDropdownMenu {...postFeedForm} />

            <BaseButton
              type="submit"
              className="w-full"
              isLoading={isPostingFeed}
              disabled={isPostingFeed}
            >
              Post
            </BaseButton>
          </form>
        </Form>
      </div>
    </Card>
  );
};

export default CreatePage;
