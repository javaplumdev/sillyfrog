import React from 'react';
import useAuth from '@/hooks/useAuth';
import { Input } from '@/components/ui/input';
import { FeedFormDialog } from './FeedFormDialog';

const FeedForm = (props: any) => {
  const { onActionWithAuth } = useAuth();
  const { isOpenPostFeed, toggleOpenPostFeed, postFeedForm, onSubmitPostFeed, isPostingFeed } =
    props;

  return (
    <div>
      <Input
        type="text"
        placeholder="Tell us what you feel!"
        onClick={onActionWithAuth(toggleOpenPostFeed)}
      />

      <FeedFormDialog
        form={postFeedForm}
        isOpen={isOpenPostFeed}
        isLoading={isPostingFeed}
        onSubmit={onSubmitPostFeed}
        toggleOpen={toggleOpenPostFeed}
      />
    </div>
  );
};

export default FeedForm;
