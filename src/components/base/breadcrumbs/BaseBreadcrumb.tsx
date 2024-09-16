import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Newspaper } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import BaseSkeleton from '../skeletons/BaseSkeleton';

type BaseBreadcrumbProps = { data: { path: string; name: string }[]; isLoading: boolean };

const BaseBreadcrumb: React.FC<BaseBreadcrumbProps> = (props) => {
  const { data, isLoading } = props;
  const _path: string = usePathname();

  const isActive = (path: string) => path === _path;

  return (
    <React.Fragment>
      {!!isLoading && <BaseSkeleton />}

      {!isLoading && (
        <Breadcrumb className="my-3 px-3">
          <BreadcrumbList>
            {data.map(({ path, name }, index: number) => {
              return (
                <React.Fragment key={index}>
                  {index !== 0 && <BreadcrumbSeparator />}
                  <BreadcrumbItem>
                    {isActive(path) && <BreadcrumbPage>{name}</BreadcrumbPage>}
                    {path && !isActive(path) && (
                      <Link href={path} className="flex items-center space-x-2">
                        {name.toLowerCase() === 'feed' && <Newspaper size="18" />}{' '}
                        <span>{name}</span>
                      </Link>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </React.Fragment>
  );
};

export default BaseBreadcrumb;
