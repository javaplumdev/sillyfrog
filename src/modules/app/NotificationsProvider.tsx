'use client';

import { collectionRefNotifs } from '@/firebase/firebaseConfig';
import { sonnerToast } from '@/lib/toast';
import {
  doc,
  DocumentData,
  getDocs,
  query,
  QuerySnapshot,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore';
import React, { createContext, useState, ReactNode } from 'react';
import useAuth from '@/hooks/useAuth';
import { v4 as uuidv4 } from 'uuid';
import { getTimestamp } from '@/lib/dates';
import { orderBy } from 'lodash';

interface NotificationContextProps {
  data: any[];
  addNotif: (options: any) => any;
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  isLoading: boolean;
}

// Create the context with a default value
export const NotificationContext = createContext<NotificationContextProps | any>(undefined);

type NotificationsProviderProps = {
  children: ReactNode;
};

const NotificationsProvider: React.FC<NotificationsProviderProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useAuth();
  const { uid, photoURL, displayName, email } = userData || {};

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const getData = async () => {
    setIsLoading(true);

    const constraints = [orderBy('timestamp', 'desc'), where('to', '==', uid)].filter(Boolean);

    try {
      const q = query(collectionRefNotifs, ...(constraints as any));
      const data: QuerySnapshot<DocumentData, DocumentData> = await getDocs(q);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setData(filteredData);
    } catch (error) {
      sonnerToast('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addNotif = async (options: any) => {
    let notifId = uuidv4();

    const { to, type, postId } = options || {};

    try {
      await setDoc(doc(collectionRefNotifs, notifId), {
        notifId: notifId,
        postId: postId,
        from: uid,
        to: to,
        type: type,
        photo: photoURL,
        name: displayName || email,
        timestamp: serverTimestamp() || getTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NotificationContext.Provider value={{ data, setData, isLoading, addNotif }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationsProvider;
