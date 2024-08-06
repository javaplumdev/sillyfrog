import React from 'react';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';
import { getDocs, query, where } from 'firebase/firestore';
import { collectionRefComments } from '@/firebase/firebaseConfig';

const useGetComments = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);

    try {
      const q = query(collectionRefComments, where('postId', '==', id));
      const data = await getDocs(q);
      const filteredData: any = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setData(filteredData);
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, reload: getData };
};

export default useGetComments;
