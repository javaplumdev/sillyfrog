'use client';

import React from 'react';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';
import { db } from '@/firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const useGetView = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);

      const docRef = doc(db, 'feed', id as string);
      const snapshot = await getDoc(docRef);

      setData(snapshot.data() as any);
    } catch (error) {
      toast.error(error as string);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return { data, isLoading };
};

export default useGetView;
