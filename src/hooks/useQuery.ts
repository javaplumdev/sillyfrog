import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const useQuery = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState<string>('');
  const query = searchParams.get('q') || '';

  // for every change from query, this useEffect will trigger
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (name) {
      newParams.set('q', name);
    } else {
      newParams.delete('q');
    }
    router.push(`?${newParams.toString()}`);
  }, [name, router, searchParams]);

  // triggers filter based on the filername
  const onHandleQuery = (filterName: string) => {
    setName(filterName);
  };

  return { onHandleQuery, query, name };
};
