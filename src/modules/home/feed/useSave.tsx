'use client';

import React from 'react';
import useAuth from '@/hooks/useAuth';
import { db } from '@/firebase/firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { sonnerToast } from '@/lib/toast';

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
      sonnerToast('error', error instanceof Error && error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isSaving: isLoading, onSave: onSubmit };
};

export default useSave;
