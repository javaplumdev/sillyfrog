import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface BaseAlertProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'destructive' | null | undefined;
}

const BaseAlert = ({
  description,
  title = 'Error',
  variant = 'destructive',
  icon = <AlertCircle className="h-4 w-4" />,
  className,
}: BaseAlertProps) => {
  return (
    <Alert variant={variant} className={cn('mb-3', className)}>
      {icon && icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default BaseAlert;
