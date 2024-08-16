'use client';

import React from 'react';
import useAuth from '@/hooks/useAuth';
import { useParams } from 'next/navigation';
import { db } from '@/firebase/firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { sonnerToast } from '@/lib/toast';

const useDislike = () => {
  const { id: paramsId } = useParams();
  const { userData } = useAuth();
  const { uid } = userData || {};

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (id: string, data: { id: string; user: string }[]) => {
    setIsLoading(true);

    let ids = id || paramsId;

    try {
      const isDislike = (data || []).find(({ user }: { user: string }) => user === uid);

      await updateDoc(doc(db, 'feed', ids as string), {
        dislikes: isDislike ? arrayRemove({ user: uid }) : arrayUnion({ user: uid }),
      });
    } catch (error) {
      sonnerToast('error', error instanceof Error && error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isDisliking: isLoading, onDislike: onSubmit };
};

export default useDislike;
