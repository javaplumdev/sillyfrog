import React from 'react';
import BaseButton from '@/components/base/buttons/BaseButton';
import { cn } from '@/lib/utils';

const headerOneCn = { cn: 'mt-8 text-3xl md:text-5xl' };

const NotFound = () => {
  return (
    <main>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center text-center text-primary">
          {/* <RiAlarmWarningFill size={60} className="drop-shadow-glow animate-flicker text-red-500" /> */}
          <h1 className={cn(headerOneCn.cn, 'text-destructive')}>404</h1>
          <h1 className={cn(headerOneCn.cn)}>Page Not Found</h1>
          <p className="my-6">Sorry, the page you are looking for could not be found.</p>
          <BaseButton to="/">Back to home</BaseButton>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
