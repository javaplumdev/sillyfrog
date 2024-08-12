'use client';

import React from 'react';
import { toast } from 'sonner';
import useAuth from '@/hooks/useAuth';
import { db } from '@/firebase/firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

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
    } catch (e) {
      toast.error(e as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLiking: isLoading, onLike: onSubmit };
};

export default useLike;
