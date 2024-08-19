import React from 'react';
import { sonnerToast } from '@/lib/toast';
import { useParams, useSearchParams } from 'next/navigation';
import { collectionRefComments } from '@/firebase/firebaseConfig';
import { DocumentData, getDocs, Query, query, QuerySnapshot, where } from 'firebase/firestore';
import { orderBy } from 'lodash';

type DataProps = { id: string };

const useGetComments = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const searchParams = useSearchParams();
  const _query = searchParams.get('query') || '';

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_query]);

  const getData = async () => {
    setIsLoading(true);

    const constraints = [
      _query === 'latest' ? orderBy('timestamp', 'desc') : undefined,
      where('postId', '==', id),
    ].filter(Boolean);

    try {
      const q: Query<DocumentData, DocumentData> = query(
        collectionRefComments,
        ...(constraints as any)
      );
      const data: QuerySnapshot<DocumentData, DocumentData> = await getDocs(q);
      const filteredData: DataProps[] = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setData(filteredData);
    } catch (error) {
      sonnerToast('error', error instanceof Error && error.message);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return { data, isLoading, reload: getData };
};

export default useGetComments;
