import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

let loader = <Loader2 className="mr-2 h-4 w-4 animate-spin" />;

type BaseButtonProps = {
  to?: string;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  size?: 'default' | 'icon' | 'sm' | 'lg' | null | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?:
    | 'default'
    | 'link'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
};

const BaseButton = ({
  to,
  icon,
  endIcon,
  children,
  isLoading,
  size = 'sm',
  ...rest
}: BaseButtonProps) => {
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
