import React from 'react';
import { Input } from '@/components/ui/input';

import BaseButton from '@/components/base/buttons/BaseButton';
import BaseDialog from '@/components/base/dialogs/BaseDialog';
import urlJoin from 'url-join';

const FeedShareDialog: React.FC<any> = (props) => {
  const { id, baseUrl, isOpen, toggleOpen, isLoading, onSubmit, isCopied } = props;
  const url = id ? urlJoin(baseUrl, `post/${id}`) : baseUrl;

  return (
    <BaseDialog
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      title="Share a copy"
      description="Share this post with your friends if you find this one interesting!"
    >
      <div className="flex flex-row">
        <Input type="text" value={urlJoin(url)} disabled />
        <BaseButton isLoading={isLoading} disabled={isLoading} onClick={() => onSubmit()}>
          {isCopied ? 'Copied' : 'Copy'}
        </BaseButton>
      </div>
    </BaseDialog>
  );
};

export default FeedShareDialog;
