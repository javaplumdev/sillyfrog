'use client';
import React from 'react';
import useAuth from '@/hooks/useAuth';
import { Input } from '@/components/ui/input';
import { FeedFormDialog } from './FeedFormDialog';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import { UseFormReturn } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const FeedForm: React.FC<
  {
    isPostingFeed: boolean;
    isOpenPostFeed: boolean;
    onSubmitPostFeed: () => void;
    toggleOpenPostFeed: () => void;
    postFeedForm: UseFormReturn<{ feed_content: string; label: string }, {}, undefined>;
  } & any
> = ({ isPostingFeed, isOpenPostFeed, postFeedForm, onSubmitPostFeed, toggleOpenPostFeed }) => {
  const { onActionWithAuth, userData } = useAuth();
  const router = useRouter();
  const { photoURL, displayName, username } = userData || {};

  return (
    <div>
      <div className="flex space-x-2">
        {/* {isAuth && <BaseAvatar photo={photoURL} name={displayName} />} */}
        <BaseAvatar photo={photoURL} name={displayName || username} />

        <Input
          type="text"
          placeholder="Tell us what you feel!"
          onClick={onActionWithAuth(() => router.push('/create'))}
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
