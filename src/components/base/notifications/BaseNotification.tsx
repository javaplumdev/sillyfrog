import React from 'react';
import { Bell } from 'lucide-react';
import Link from 'next/link';
import { useNotification } from '@/hooks/useNotifications';
import { isEmpty } from 'lodash';

const BaseNotification = () => {
  const { data } = useNotification();

  console.log(data);

  return (
    <Link href="/notifications" className="mx-4 hover:cursor-pointer">
      <div className="relative">
        <Bell className="mr-2" />

        {!isEmpty(data) && (
          <small className="absolute top-0 right-0 text-xs bg-red-600 px-1 rounded-full font-bold">
            {data.length || 0}
          </small>
        )}
      </div>
    </Link>
  );
};

export default BaseNotification;
