import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

let loader = <Loader2 className="mr-2 h-4 w-4 animate-spin" />;

const BaseButton = ({ children, to, isLoading, icon, endIcon, size = 'sm', ...rest }: any) => {
  const template = (
    <Button size={size} {...rest}>
      {isLoading ? (
        loader
      ) : (
        <>
          {icon && <div className="mr-2">{icon}</div>} {children}{' '}
          {endIcon && <div className="ml-2">{endIcon}</div>}
        </>
      )}
    </Button>
  );

  if (to) return <Link href={to}>{template}</Link>;

  return template;
};

export default BaseButton;
