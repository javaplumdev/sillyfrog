'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { db } from '@/firebase/firebaseConfig';
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';

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

      // const docRef = doc(db, 'feed', id as string);
      // const snapshot = await getDoc(docRef);

      // setData(snapshot.data() as any);

      const q = query(collection(db, 'feed'), where('postId', '==', id));

      onSnapshot(q, (snapshot) => {
        const d = (snapshot || []).docs.map((doc: any) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setData(d);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return { data, isLoading };
};

export default useGetView;
