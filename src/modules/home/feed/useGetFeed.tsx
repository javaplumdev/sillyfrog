import React from 'react';

import { useInterval } from '@/lib/interval';
import { collecetionRefFeeds } from '@/firebase/firebaseConfig';
import { onSnapshot, orderBy, query } from 'firebase/firestore';

const useGetFeed = () => {
  const [data, setData] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);

      const q = query(collecetionRefFeeds, orderBy('timestamp', 'desc'));

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
      useInterval(setIsLoading(false), 1000);
    }
  };

  return { data, isLoading };
};

export default useGetFeed;
