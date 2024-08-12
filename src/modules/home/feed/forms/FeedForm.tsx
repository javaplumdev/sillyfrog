'use client';
import React from 'react';
import useAuth from '@/hooks/useAuth';
import { Input } from '@/components/ui/input';
import { FeedFormDialog } from './FeedFormDialog';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';

const FeedForm = (props: any) => {
  const { onActionWithAuth, userData } = useAuth();
  const { isOpenPostFeed, toggleOpenPostFeed, postFeedForm, onSubmitPostFeed, isPostingFeed } =
    props;

  const { photoURL, displayName } = userData || {};

  return (
    <div>
      <div className="flex space-x-2">
        {/* {isAuth && <BaseAvatar photo={photoURL} name={displayName} />} */}
        <BaseAvatar photo={photoURL} name={displayName} />

        <Input
          type="text"
          placeholder="Tell us what you feel!"
          onClick={onActionWithAuth(toggleOpenPostFeed)}
        />
      </div>

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
