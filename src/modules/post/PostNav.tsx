import React from 'react';
import BaseBreadcrumb from '@/components/base/breadcrumbs/BaseBreadcrumb';
import { useParams } from 'next/navigation';

type PostNavProps = { data: { feed_content: string }; isLoading: boolean };

const PostNav: React.FC<PostNavProps> = ({ data, isLoading }) => {
  const { id } = useParams();
  const { feed_content } = data || {};

  const name = `${feed_content?.slice(0, 20)}${feed_content?.length > 20 ? '...' : ''}`;

  const nav = [
    { path: '/', name: 'Feed' },
    { path: `/post/${id}`, name: name },
  ];

  return <BaseBreadcrumb data={nav} isLoading={isLoading} />;
};

export default PostNav;
