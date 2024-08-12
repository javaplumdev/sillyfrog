import React from 'react';
import { toast } from 'sonner';
import { collecetionRefFeeds } from '@/firebase/firebaseConfig';
import { DocumentData, onSnapshot, orderBy, Query, query } from 'firebase/firestore';

const useGetFeed = () => {
  const [data, setData] = React.useState<{ id: string }[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);

    try {
      const q: Query<DocumentData, DocumentData> = query(
        collecetionRefFeeds,
        orderBy('timestamp', 'desc')
      );

      onSnapshot(q, (snapshot) => {
        const d = (snapshot || []).docs.map(({ data, id }) => ({ ...data(), id: id }));

        setData(d);
      });
    } catch (error) {
      toast.error('Event has not been created');
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return { data, isLoading };
};

export default useGetFeed;
