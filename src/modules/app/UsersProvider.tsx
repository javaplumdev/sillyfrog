'use client';

import React from 'react';
import { sonnerToast } from '@/lib/toast';
import { getDocs, query } from 'firebase/firestore';
import { orderBy } from 'lodash';
import { collectionRefUsers } from '@/firebase/firebaseConfig';

export const UserContext = React.createContext({} as any);

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const constraints = [orderBy('timestamp', 'desc')];

    try {
      const q = query(collectionRefUsers, ...(constraints as any));
      const data = await getDocs(q);
      const filteredData: any = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setUsers(filteredData);
    } catch (error) {
      sonnerToast('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return <UserContext.Provider value={{ users, isLoading }}>{children}</UserContext.Provider>;
};

export default UsersProvider;
