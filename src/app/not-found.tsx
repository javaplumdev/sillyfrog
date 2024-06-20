import React from 'react';
import BaseButton from '@/components/base/buttons/BaseButton';
import { ShieldX } from 'lucide-react';
import { cn } from '@/lib/utils';

const headerOneCn = { cn: 'mt-8 text-3xl md:text-6xl' };

const NotFound = () => {
  return (
    <main>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          {/* <RiAlarmWarningFill size={60} className="drop-shadow-glow animate-flicker text-red-500" /> */}
          <div className="flex items-center">
            <ShieldX className="text-red-500 mt-6 mr-3" size={40} />
            <h1 className={cn(headerOneCn.cn, 'text-red-500 font-extrabold')}>404</h1>
          </div>
          <h1 className={cn(headerOneCn.cn)}>Page Not Found</h1>
          <p className="my-6">Sorry, the page you are looking for could not be found.</p>
          <BaseButton to="/">Back to home</BaseButton>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
