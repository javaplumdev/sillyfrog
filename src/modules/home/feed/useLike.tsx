'use client';

import React from 'react';
import useAuth from '@/hooks/useAuth';
import { db } from '@/firebase/firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { sonnerToast } from '@/lib/toast';

const useLike = () => {
  const { userData } = useAuth();
  const { uid } = userData || {};

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (id: string, data: { id: string; user: string }[]) => {
    setIsLoading(true);

    try {
      const isLike = (data || []).find(({ user }: { user: string }) => user === uid);

      await updateDoc(doc(db, 'feed', id), {
        likes: isLike ? arrayRemove({ user: uid }) : arrayUnion({ user: uid }),
      });
    } catch (error) {
      sonnerToast('error', error instanceof Error && error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLiking: isLoading, onLike: onSubmit };
};

export default useLike;
