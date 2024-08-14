import { z } from 'zod';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useAuth from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import { collectionRefComments, db } from '@/firebase/firebaseConfig';
import { zodResolver } from '@hookform/resolvers/zod';
import { arrayUnion, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { sonnerToast } from '@/lib/toast';

const usePostComment = (callback: () => void) => {
  const { id } = useParams();
  const { userData } = useAuth();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { uid, displayName, photoURL } = userData || {};

  const formSchema = z.object({
    comment: z.string().min(1, 'Comment is required!'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { comment: '' },
  });

  const { reset } = form;

  const onSubmit = async (data: { comment: string }) => {
    setIsLoading(true);
    const commentId = uuidv4();
    const { comment } = data || {};

    const payload = {
      user: uid,
      postId: id,
      photo: photoURL,
      content: comment,
      name: displayName,
      commentId: commentId,
      timestamp: serverTimestamp(),
    };

    try {
      await setDoc(doc(collectionRefComments, commentId), payload);

      await updateDoc(doc(db, 'feed', id as string), {
        comments: arrayUnion({ commentId: commentId }),
      });

      if (callback) callback();
    } catch (error) {
      sonnerToast('error', error instanceof Error && error.message);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return { isLoading, onSubmit, form };
};

export default usePostComment;
