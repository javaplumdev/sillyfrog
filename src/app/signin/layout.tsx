import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: `%s | Sillyfrog`,
    default: 'Signin',
  },
  description: 'A Sillyfrog siognup page',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
