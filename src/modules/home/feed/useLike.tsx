'use client';

import React from 'react';
import useAuth from '@/hooks/useAuth';
import { db } from '@/firebase/firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

const useLike = () => {
  const { userData } = useAuth();
  const { uid } = userData || {};

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (id: string, data: any) => {
    setIsLoading(true);

    try {
      const isLike = (data || []).find(({ user }: any) => user === uid);

      await updateDoc(doc(db, 'feed', id), {
        likes: isLike ? arrayRemove({ user: uid }) : arrayUnion({ user: uid }),
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLiking: isLoading, onLike: onSubmit };
};

export default useLike;
