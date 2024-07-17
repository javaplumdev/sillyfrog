import { z } from 'zod';
import React from 'react';
import useAuth from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { collecetionRefFeeds } from '@/firebase/firebaseConfig';

const usePostFeed = () => {
  const { userData } = useAuth();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { displayName, photoURL, uid } = userData || {};

  const toggleOpen = () => setIsOpen(!isOpen);

  const formSchema = z.object({
    feed_content: z
      .string()
      .min(1, 'Content is required.')
      .max(100, 'Content must be at most 100 characters'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feed_content: '',
    },
  });

  const { reset } = form;

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);

      await addDoc(collecetionRefFeeds, {
        ...data,
        userId: uid,
        photo: photoURL,
        name: displayName,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsOpen(false);
      setIsLoading(false);
      reset();
    }
  };

  return {
    postFeedForm: form,
    isOpenPostFeed: isOpen,
    isPostingFeed: isLoading,
    onSubmitPostFeed: onSubmit,
    toggleOpenPostFeed: toggleOpen,
  };
};

export default usePostFeed;
