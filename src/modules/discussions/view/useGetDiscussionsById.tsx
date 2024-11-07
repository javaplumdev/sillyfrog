'use client';

import { useState, useEffect } from 'react';
import { sonnerToast } from '@/lib/toast';
import { useParams } from 'next/navigation';
import { collectionRefFeeds, db } from '@/firebase/firebaseConfig';
import { getDocs, query, where } from 'firebase/firestore';

const useGetDiscussionsById = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    setIsLoading(true);

    try {
      // Create a query to filter based on the 'label' field
      const q = query(collectionRefFeeds, where('label', '==', id));

      // Fetch the filtered documents
      const querySnapshot = await getDocs(q);

      let filteredData: any = [];

      querySnapshot.forEach((item) => {
        filteredData.push({ id: item.id, ...item.data() });
      });

      setData(filteredData);
    } catch (error) {
      sonnerToast('error', error);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return { data, isLoading };
};

export default useGetDiscussionsById;
