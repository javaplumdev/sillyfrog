'use client';

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import { sonnerToast } from '@/lib/toast';
import { db } from '@/firebase/firebaseConfig';
import { doc, onSnapshot } from 'firebase/firestore';

const useGetView = () => {
  const location = usePathname();

  const { id } = useParams();
  const [data, setData] = React.useState<null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const getData = async () => {
    try {
      setIsLoading(true);

      const docRef = doc(db, 'feed', id as string);

      onSnapshot(docRef, (snapshot) => {
        setData(snapshot.data({ serverTimestamps: 'estimate' }) as any);
      });
    } catch (error) {
      sonnerToast('error', error);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return { data, isLoading, reload: getData };
};

export default useGetView;
