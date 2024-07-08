'use client'; // Error components must be Client Components

import * as React from 'react';
import { TriangleAlert } from 'lucide-react';
import BaseButton from '@/components/base/buttons/BaseButton';
import { cn } from '@/lib/utils';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  const onRefresh = () => window.location.reload();

  return (
    <main>
      <section>
        <div
          className={cn(
            'layout flex flex-col items-center justify-center text-center text-primary'
          )}
          style={{ height: '80vh' }}
        >
          <TriangleAlert className="text-red-500" size={50} />
          <h1 className="mt-8 text-3xl md:text-5xl">Oops, something went wrong! :(</h1>
          <p className="my-6">
            Sorry, we're having technical issues. Please try again, sometimes it works. If the issue
            still persists, please contact us.
          </p>
          <BaseButton className="mt-4" onClick={() => onRefresh()}>
            Try again
          </BaseButton>
        </div>
      </section>
    </main>
  );
}
