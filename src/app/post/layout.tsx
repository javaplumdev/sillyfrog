import React from 'react';
import { ViewProvider } from '@/modules/post/ViewProvider';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ViewProvider>
      <div className="sm:container mx-auto sm:px-0">{children}</div>
    </ViewProvider>
  );
};

export default Layout;
