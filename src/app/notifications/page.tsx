import React from 'react';
import NotificationPage from '@/modules/notifications/NotificationPage';

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col px-3">
      <h3 className="mb-3 font-semibold">Notifications</h3>
      <NotificationPage />
    </div>
  );
};

export default page;
