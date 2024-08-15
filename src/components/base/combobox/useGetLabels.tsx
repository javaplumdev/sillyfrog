import React from 'react';
import Error from 'next/error';
import { sonnerToast } from '@/lib/toast';
import { collectionRefLabels } from '@/firebase/firebaseConfig';
import {
  limit,
  query,
  where,
  orderBy,
  onSnapshot,
  DocumentData,
  QuerySnapshot,
} from 'firebase/firestore';

const useGetLabels = (search: string) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>([]);

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    setIsLoading(true);

    try {
      const q = query(
        collectionRefLabels,
        where('label', '>=', search),
        where('label', '<=', search + '\uf8ff'),
        orderBy('label'),
        limit(10)
      );

      onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
        const d = snapshot.docs.map((doc) => ({
          ...(doc.data() as any),
          id: doc.id,
        }));

        setData(d);
      });
    } catch (error) {
      sonnerToast('error', error instanceof Error && 'An unknown error occurred');
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return { data, isLoading, setData };
};

export default useGetLabels;
