'use client';

import React from 'react';
import { toast } from 'sonner';
import { useParams, usePathname } from 'next/navigation';
import { db } from '@/firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

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
      const snapshot = await getDoc(docRef);

      setData(snapshot.data() as any);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return { data, isLoading };
};

export default useGetView;
