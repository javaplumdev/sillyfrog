import React from 'react';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import useAuth from '@/hooks/useAuth';
import BaseButton from '@/components/base/buttons/BaseButton';
import CategoriesFrog from '../../../assets/feed//3d-fluency-frog.png';

import styles from './styles.module.scss';

const Categories = () => {
  const { isAuth } = useAuth();

  return (
    <div className={cn(styles['separator-parent'], 'sticky top-20 flex flex-col space-y-5')}>
      {!isAuth && (
        <div className={cn(styles['separator-child'], 'flex flex-col space-y-2')}>
          <h3 className="font-bold">Join</h3>
          <p>Seems like you are not currently signed in. Hop in now to feel the fun and rants!</p>
          <BaseButton variant="outline" to="/signup">
            Sign up
          </BaseButton>
        </div>
      )}

      <div className={cn(styles['separator-child'], { 'pt-5': !isAuth })}>
        <h3 className="font-bold">Having fun?</h3>
        <div className="flex items-center space-x-3 text-sm">
          <Image
            priority
            src={CategoriesFrog}
            alt="Follow us on Twitter"
            className={cn(styles['image'], 'min-w-screen-sm')}
            width="100"
          />

          <div className="flex flex-col space-y-2">
            <span>Share Sillyfrog webpage on your friends with taste!</span>

            <BaseButton variant="outline">Share</BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
