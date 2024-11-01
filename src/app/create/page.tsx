'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import CreatePage from '@/modules/create/CreatePage';
import usePostFeed from '@/modules/home/feed/usePostFeed';

const Page = () => {
  const { onSubmitPostFeed, isPostingFeed, postFeedForm } = usePostFeed();

  const { isAuth } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to prevent hydration mismatch
    if (isAuth) {
      setLoading(false);
    } else {
      router.push('/');
    }
  }, [isAuth, router]);

  // Show a loading indicator while determining auth status
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mb-3">
        <div className="flex">
          <MoveLeft className="mr-3" />
          <Link href="/" className="underline">
            Go back
          </Link>
        </div>
        <h3>Tell us what you feel</h3>
      </div>

      <CreatePage
        postFeedForm={postFeedForm}
        isPostingFeed={isPostingFeed}
        onSubmitPostFeed={onSubmitPostFeed as any}
      />
    </div>
  );
};

export default Page;
