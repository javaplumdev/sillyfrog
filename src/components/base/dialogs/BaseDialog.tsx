import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog';

const BaseDialog: React.FC<{
  title: string;
  isOpen: boolean;
  description: string;
  toggleOpen: () => void;
  children: React.ReactNode;
}> = (props) => {
  const { isOpen, toggleOpen, children, title, description = '' } = props;

  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
