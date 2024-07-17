import React from 'react';
import { getDocs } from 'firebase/firestore';
import { collecetionRefFeeds } from '@/firebase/firebaseConfig';
import { useInterval } from '@/lib/interval';

const useGetFeed = () => {
  const [data, setData] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);

      const response: any = await getDocs(collecetionRefFeeds);

      const d = (response || []).docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setData(d);
    } catch (error) {
      console.log(error);
    } finally {
      useInterval(setIsLoading(false), 1000);
    }
  };

  return { data, isLoading };
};

export default useGetFeed;
