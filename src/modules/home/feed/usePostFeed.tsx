import { z } from 'zod';
import React from 'react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import useAuth from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { collecetionRefFeeds } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/navigation';

const usePostFeed = () => {
  const router = useRouter();
  const { userData } = useAuth();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { displayName, photoURL, uid, email } = userData || {};

  const toggleOpen = () => setIsOpen(!isOpen);

  const formSchema = z.object({
    feed_content: z.string().min(1, 'Content is required.'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feed_content: '',
    },
  });

  const { reset } = form;

  React.useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const onSubmit = async (data: any) => {
    const postId = uuidv4();

    try {
      setIsLoading(true);

      await addDoc(collecetionRefFeeds, {
        ...data,
        userId: uid,
        photo: photoURL,
        postId: postId,
        name: displayName || email,
        timestamp: serverTimestamp(),
      });

      router.push(`/post/${postId}`);
      toast.success('Post created!');
    } catch (error) {
      toast.error(error as string);
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
