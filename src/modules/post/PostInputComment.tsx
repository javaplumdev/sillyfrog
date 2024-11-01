import React from 'react';

import useAuth from '@/hooks/useAuth';
import { ArrowUp } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import BaseButton from '@/components/base/buttons/BaseButton';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type PostInputCommentProps = {
  onSubmit: () => void;
  form: UseFormReturn<FieldValues, {}, undefined>;
};

const PostInputComment: React.FC<PostInputCommentProps & any> = ({ form, onSubmit, postData }) => {
  const { userData, isAuth, onActionWithAuth } = useAuth();

  const { handleSubmit } = form || {};
  const { photoURL, displayName, username } = userData || {};

  return (
    <div className="flex space-x-2 border-b-2 pb-4">
      <BaseAvatar photo={photoURL} name={displayName || username} />
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
                        onClick={onActionWithAuth(() => {})}
                        id="comment"
                        placeholder="Type your comment here."
                        className="border-none"
                        {...field}
                      />
                    </FormControl>
                    {isAuth && <FormMessage />}
                  </FormItem>
                );
              }}
            />

            <BaseButton
              type="submit"
              onClick={onActionWithAuth(() => {})}
              className="rounded-full absolute top-5 right-0 mr-4"
            >
              <ArrowUp size={16} />
            </BaseButton>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PostInputComment;
