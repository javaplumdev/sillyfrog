import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="sm:container mx-auto">{children}</div>;
};

export default Layout;
