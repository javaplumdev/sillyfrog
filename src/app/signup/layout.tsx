import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: `%s | Sillyfrog`,
    default: 'Signup',
  },
  description: 'A Sillyfrog siognup page',
};

const layout = ({ children }: any) => {
  return <div>{children}</div>;
};

export default layout;
