import React from 'react';
import { GoHome } from 'react-icons/go';

import { Plus, Bell } from 'lucide-react';

const BaseNavFooter = () => {
  return (
    <div className="flex absolute bottom-0 w-full text-center p-3 text-xs justify-center border-t space-x-12">
      <div className="flex flex-col items-center">
        <GoHome size="28" />
        <span>Home</span>
      </div>

      <div className="flex flex-col items-center">
        <Plus size="28" />
        <span>Post</span>
      </div>

      <div className="flex flex-col items-center">
        <Bell size="28" />
        Notifs
      </div>
    </div>
  );
};

export default BaseNavFooter;
