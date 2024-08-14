import React from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase/firebaseConfig';
import { deleteDoc, doc, DocumentData, DocumentReference } from 'firebase/firestore';
import { sonnerToast } from '@/lib/toast';

const useDeleteFeed = () => {
  const { id: paramsId } = useParams();
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [idToDelete, setIdToDelete] = React.useState<string>((paramsId as string) || '');

  const toggleOpen = (id?: string) => {
    setIdToDelete((id || paramsId) as string);
    setIsOpen(!isOpen);
  };

  const onSubmit = async () => {
    try {
      const feedDoc: DocumentReference<DocumentData, DocumentData> = doc(db, 'feed', idToDelete);
      await deleteDoc(feedDoc);
    } catch (error) {
      sonnerToast('error', error instanceof Error && error.message);
    } finally {
      setIsLoading(false);
      setIsOpen(false);

      if (paramsId) router.push('/');

      sonnerToast('success', 'Successfully deleted.');
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
