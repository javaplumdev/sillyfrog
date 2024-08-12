import React from 'react';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';
import { DocumentData, getDocs, Query, query, QuerySnapshot, where } from 'firebase/firestore';
import { collectionRefComments } from '@/firebase/firebaseConfig';

type DataProps = { id: string };

const useGetComments = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<DataProps[]>([{ id: '' }]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    setIsLoading(true);

    try {
      const q: Query<DocumentData, DocumentData> = query(
        collectionRefComments,
        where('postId', '==', id)
      );
      const data: QuerySnapshot<DocumentData, DocumentData> = await getDocs(q);
      const filteredData: DataProps[] = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setData(filteredData);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, reload: getData };
};

export default useGetComments;
