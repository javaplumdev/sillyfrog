import React from 'react';
import BaseBreadcrumb from '@/components/base/breadcrumbs/BaseBreadcrumb';
import { useParams } from 'next/navigation';

const PostNav = ({ data }: { data: { feed_content: string } }) => {
  const { id } = useParams();
  const { feed_content } = data || {};

  const name = `${feed_content?.slice(0, 20)}${feed_content?.length > 20 ? '...' : ''}`;

  const nav = [
    { path: '/', name: 'Feed' },
    { path: `/post/${id}`, name: name },
  ];

  return <BaseBreadcrumb data={nav} />;
};

export default PostNav;
