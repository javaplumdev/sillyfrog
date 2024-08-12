'use client';
import React from 'react';

import Link from 'next/link';
import urlJoin from 'url-join';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import useAuth from '@/hooks/useAuth';
import styles from './styles.module.scss';
import { buttonVariants } from '@/components/ui/button';
import { ICONS_EIGHT_ILLUSTRATIONS } from '@/constant/links';
import BaseButton from '@/components/base/buttons/BaseButton';
import CategoriesFrog from '../../../assets/feed//3d-fluency-frog.png';
import useShare from '../feed/useShare';
import FeedShareDialog from '../feed/FeedShareDialog';

const Categories = () => {
  const { isAuth } = useAuth();
  const [isClient, setIsClient] = React.useState<boolean>(false);
  const { onShare, toggleShare, isSharing, isShareOpen, ...shareProps } = useShare();

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <React.Fragment>
      <div className={cn(styles['separator-parent'], 'sticky top-20 flex flex-col space-y-5')}>
        {isClient && !isAuth && (
          <div className={cn(styles['separator-child'], 'flex flex-col space-y-2')}>
            <h3 className="font-bold">Join</h3>
            <p>Seems like you are not currently signed in. Hop in now to feel the fun and rants!</p>

            <Link href="/signup" className={buttonVariants({ variant: 'outline' })}>
              Sign up
            </Link>
          </div>
        )}

        <div
          className={cn(
            styles['separator-child'],
            { 'pt-5': !isAuth },
            'flex flex-col mt-12 md:mt-0'
          )}
        >
          <h3 className="font-bold">Having fun?</h3>
          <div className="flex items-center space-x-3 text-sm flex-col sm:flex-row">
            <Image
              priority
              src={CategoriesFrog}
              alt="This image is from Icons8!"
              className={cn(styles['image'], 'min-w-screen-sm')}
              width="100"
            />

            <div className="flex flex-col space-y-2">
              <span>Share Sillyfrog webpage on your friends with taste!</span>

              <BaseButton variant="outline" onClick={() => toggleShare()}>
                Share
              </BaseButton>
            </div>
          </div>
        </div>

        <div className={cn(styles['separator-child'], 'pt-5 text-sm')}>
          Illustration by{' '}
          <Link href={urlJoin(ICONS_EIGHT_ILLUSTRATIONS || '', 'author', 'zD2oqC8lLBBA')}>
            Icons 8
          </Link>{' '}
          from <Link href={urlJoin(ICONS_EIGHT_ILLUSTRATIONS || '')}>Ouch!</Link>
        </div>
      </div>

      <FeedShareDialog
        onSubmit={onShare}
        isOpen={isShareOpen}
        isLoading={isSharing}
        toggleOpen={toggleShare}
        {...shareProps}
      />
    </React.Fragment>
  );
};

export default Categories;
