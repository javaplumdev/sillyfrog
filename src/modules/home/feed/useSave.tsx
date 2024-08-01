'use client';

import React from 'react';
import { toast } from 'sonner';
import useAuth from '@/hooks/useAuth';
import { db } from '@/firebase/firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

const useSave = () => {
  const { userData } = useAuth();
  const { uid } = userData || {};

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (id: string, data: any) => {
    setIsLoading(true);

    try {
      const isSave = (data || []).find(({ user }: any) => user === uid);

      await updateDoc(doc(db, 'feed', id), {
        saves: isSave ? arrayRemove({ user: uid }) : arrayUnion({ user: uid }),
      });
    } catch (e) {
      toast.error(e as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { isSaving: isLoading, onSave: onSubmit };
};

export default useSave;
