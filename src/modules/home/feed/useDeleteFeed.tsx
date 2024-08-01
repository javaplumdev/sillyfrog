import React from 'react';
import { db } from '@/firebase/firebaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'sonner';

const useDeleteFeed = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [idToDelete, setIdToDelete] = React.useState<string>('');

  const toggleOpen = (id?: string) => {
    setIdToDelete(id || '');
    setIsOpen(!isOpen);
  };

  const onSubmit = async () => {
    try {
      const feedDoc = doc(db, 'feed', idToDelete);
      await deleteDoc(feedDoc);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      setIsOpen(false);

      toast.success('Successfully deleted.');
    }
  };

  return {
    onDelete: onSubmit,
    isDeleteOpen: isOpen,
    isDeleting: isLoading,
    toggleDelete: toggleOpen,
  };
};

export default useDeleteFeed;
