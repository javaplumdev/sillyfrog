import React from 'react';
import BaseButton from '@/components/base/buttons/BaseButton';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog';

const FeedDeleteDialog: React.FC<DialogProps> = (props) => {
  const { isOpen, toggleOpen, isLoading, onSubmit } = props;

  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete post</DialogTitle>
          <DialogDescription>Are you sure you want to delete?</DialogDescription>

          <div className="flex flex-row justify-end space-x-2">
            <BaseButton
              variant="ghost"
              disabled={isLoading}
              isLoading={isLoading}
              onClick={() => toggleOpen()}
            >
              Cancel
            </BaseButton>

            <BaseButton
              variant="destructive"
              isLoading={isLoading}
              disabled={isLoading}
              onClick={() => onSubmit()}
            >
              Delete
            </BaseButton>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FeedDeleteDialog;
