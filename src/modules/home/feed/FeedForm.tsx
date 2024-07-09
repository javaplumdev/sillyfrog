import React from 'react';
import { Input } from '@/components/ui/input';
import { FeedFormDialog } from './FeedFormDialog';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

const FeedForm = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Input type="text" placeholder="Tell us what you feel!" />
        </DialogTrigger>

        <FeedFormDialog />
      </Dialog>
    </div>
  );
};

export default FeedForm;
