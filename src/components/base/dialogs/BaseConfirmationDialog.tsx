import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog';
import React from 'react';
import { cn } from '@/lib/utils';
import BaseButton from '../buttons/BaseButton';

interface BaseConfirmationDialogProps {
  title: string;
  message: string;
  isOpen: boolean;
  isLoading: boolean;
  className?: string;
  desription?: string;
  onClick: () => void;
  toggleOpen: () => void;
}

const BaseConfirmationDialog: React.FC<BaseConfirmationDialogProps> = ({
  title,
  isOpen,
  message,
  onClick,
  isLoading,
  className,
  toggleOpen,
  desription,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      <DialogContent className={cn('sm:max-w-md', className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {desription && <DialogDescription>{desription}</DialogDescription>}
        </DialogHeader>

        <div className="flex items-center space-x-2">{message}</div>

        <DialogFooter className="flex flex-row justify-end sm:w-full space-x-2">
          <DialogClose type="button">
            <BaseButton variant="secondary" disabled={isLoading}>
              Close
            </BaseButton>
          </DialogClose>

          <BaseButton onClick={() => onClick()} disabled={isLoading}>
            Confirm
          </BaseButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BaseConfirmationDialog;
