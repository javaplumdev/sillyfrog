import React from 'react';
import { toast } from 'sonner';
import { db } from '@/firebase/firebaseConfig';
import { deleteDoc, doc, DocumentData, DocumentReference } from 'firebase/firestore';

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
      const feedDoc: DocumentReference<DocumentData, DocumentData> = doc(db, 'feed', idToDelete);
      await deleteDoc(feedDoc);
    } catch (err) {
      toast.error(err as string);
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
