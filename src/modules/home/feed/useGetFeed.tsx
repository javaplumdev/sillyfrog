import React from 'react';
import { toast } from 'sonner';
import { collectionRefFeeds } from '@/firebase/firebaseConfig';
import { DocumentData, onSnapshot, orderBy, Query, query, QuerySnapshot } from 'firebase/firestore';

type DataProps = {
  id: string;
};

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
        collectionRefFeeds,
        orderBy('timestamp', 'desc')
      );

      onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
        const d: DataProps[] = snapshot.docs.map((doc) => ({
          ...(doc.data() as DataProps),
          id: doc.id,
        }));

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
