import { z } from 'zod';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useAuth from '@/hooks/useAuth';
import { sonnerToast } from '@/lib/toast';
import { useForm } from 'react-hook-form';
import { getTimestamp } from '@/lib/dates';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase/firebaseConfig';
import { zodResolver } from '@hookform/resolvers/zod';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import useAddLabels from '@/components/base/combobox/useAddLabels';
import useGetLabels from '@/components/base/combobox/useGetLabels';

const usePostFeed = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const { onAdd } = useAddLabels();
  const { data: labels } = useGetLabels('');

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { displayName, photoURL, uid, email } = userData || {};

  const toggleOpen = () => setIsOpen(!isOpen);

  const formSchema = z.object({
    feed_content: z.string().min(1, 'Content is required.'),
    label: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feed_content: '',
      label: 'ribbit',
    },
  });

  const { reset } = form;

  React.useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const onSubmit = async ({ label, ...data }: { feed_content: string; label: string }) => {
    const postId = uuidv4();

    // check if the label passed already exists in lists of labels
    const isIncluded = (labels || []).some((item: { label: string }) => item.label === label);

    try {
      setIsLoading(true);

      router.push(`/post/${postId}`);

      await setDoc(doc(db, 'feed', postId), {
        ...data,
        label: label,
        userId: uid,
        photo: photoURL,
        postId: postId,
        name: displayName || email,
        timestamp: serverTimestamp() || getTimestamp(),
      });

      // we will not add the passed label if it already exists
      if (!isIncluded) onAdd(label);

      sonnerToast('success', 'Post Created!');
    } catch (error) {
      sonnerToast('error', error instanceof Error && error.message);
    } finally {
      setIsOpen(false);
      reset();

      setTimeout(() => setIsLoading(false), 500);
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
