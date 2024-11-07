import React from 'react';
import { sonnerToast } from '@/lib/toast';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';

const useAddLabels = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (label: string) => {
    try {
      let id = uuidv4();
      const docRef = doc(db, 'labels', id as string);

      await setDoc(docRef, { id: id, label: label });

      setIsLoading(true);
    } catch (error) {
      sonnerToast('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { onAdd: onSubmit, isAdding: isLoading };
};

export default useAddLabels;
