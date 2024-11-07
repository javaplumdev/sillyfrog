'use client';

import React from 'react';
import useAuth from '@/hooks/useAuth';
import { sonnerToast } from '@/lib/toast';
import { useParams } from 'next/navigation';
import { db } from '@/firebase/firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

interface SaveData {
  id: string;
  user: string;
}

const useSave = () => {
  const { id: paramsId } = useParams();
  const { userData } = useAuth();
  const { uid } = userData || {};

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (id: string, data: SaveData[]) => {
    setIsLoading(true);

    let ids = id || paramsId;

    try {
      const isSave = (data || []).find(({ user }: { user: string }) => user === uid);

      await updateDoc(doc(db, 'feed', ids as string), {
        saves: isSave ? arrayRemove({ user: uid }) : arrayUnion({ user: uid }),
      });
    } catch (error) {
      sonnerToast('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isSaving: isLoading, onSave: onSubmit };
};

export default useSave;
