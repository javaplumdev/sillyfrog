import React from 'react';
import { collectionRefFeeds } from '@/firebase/firebaseConfig';
import {
  limit,
  query,
  Query,
  orderBy,
  onSnapshot,
  DocumentData,
  QuerySnapshot,
  startAfter,
  getDocs,
} from 'firebase/firestore';
import { sonnerToast } from '@/lib/toast';
import { useSearchParams } from 'next/navigation';

type DataProps = {
  id: string;
};

const useGetFeed = () => {
  const [hasMore, setHasMore] = React.useState(true);
  const [lastDoc, setLastDoc] = React.useState<any>(null);
  const [data, setData] = React.useState<{ id: string; label?: string }[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const searchParams = useSearchParams();
  const _query = searchParams.get('q');

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_query]);

  const getData = async () => {
    setIsLoading(true);

    const constraints = [
      _query === 'latest' ? orderBy('timestamp', 'desc') : undefined,
      // _query === 'top' ? orderBy('populariry', 'desc') : undefined,
      limit(30),
    ].filter(Boolean);

    try {
      const q: Query<DocumentData, DocumentData> = query(
        collectionRefFeeds,
        ...(constraints as any)
      );

      onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
        const data = snapshot.docs.map((doc) => ({
          ...(doc.data({ serverTimestamps: 'estimate' }) as DataProps),
          id: doc.id,
        }));

        setData(data);

        if (snapshot.docs.length > 0) {
          setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
          setHasMore(snapshot.docs.length === 30);
        } else {
          setHasMore(false);
        }
      });
    } catch (error) {
      sonnerToast('error', error instanceof Error && error.message);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  const loadMore = async () => {
    if (!lastDoc) return;

    try {
      setIsLoading(true);

      const q = query(
        collectionRefFeeds,
        orderBy('timestamp', 'desc'),
        startAfter(lastDoc),
        limit(30)
      );

      const response = await getDocs(q);

      const _data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as DataProps);
      setData((prev) => [...prev, ..._data]);

      if (response.docs.length > 0) {
        setLastDoc(response.docs[response.docs.length - 1]);
        // Check if there are more items available
        setHasMore(response.docs.length === 30); // Assuming 30 items per page
      } else {
        setHasMore(false); // No more items available
      }
    } catch (error) {
      sonnerToast('error', error instanceof Error && error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, loadMore, hasMore };
};

export default useGetFeed;
