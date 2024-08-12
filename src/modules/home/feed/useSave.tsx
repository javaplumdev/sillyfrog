'use client';

import React from 'react';
import { toast } from 'sonner';
import useAuth from '@/hooks/useAuth';
import { db } from '@/firebase/firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

interface SaveData {
  id: string;
  user: string;
}

const useSave = () => {
  const { userData } = useAuth();
  const { uid } = userData || {};

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (id: string, data: SaveData[]) => {
    setIsLoading(true);

    try {
      const isSave = (data || []).find(({ user }: { user: string }) => user === uid);

      await updateDoc(doc(db, 'feed', id), {
        saves: isSave ? arrayRemove({ user: uid }) : arrayUnion({ user: uid }),
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return { isSaving: isLoading, onSave: onSubmit };
};

export default useSave;
