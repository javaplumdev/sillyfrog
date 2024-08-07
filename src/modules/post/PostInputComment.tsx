import React from 'react';

import useAuth from '@/hooks/useAuth';
import { ArrowUp } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import BaseButton from '@/components/base/buttons/BaseButton';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const PostInputComment = (props: any) => {
  const { form, onSubmit } = props;
  const { userData, isAuth, onActionWithAuth } = useAuth();

  const { handleSubmit } = form || {};
  const { photoURL, displayName } = userData || {};

  return (
    <div className="flex space-x-2 border-b-2 pb-4">
      <BaseAvatar photo={photoURL} name={displayName} />
      <div className="relative w-full">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              name="comment"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        onClick={onActionWithAuth(() => console.log('here'))}
                        id="comment"
                        placeholder="Type your comment here."
                        className="border-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            {!!isAuth && (
              <BaseButton
                type="submit"
                onClick={onActionWithAuth(() => console.log('here'))}
                className="rounded-full absolute absolute top-5 right-0 mr-4"
              >
                <ArrowUp size={16} />
              </BaseButton>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PostInputComment;
