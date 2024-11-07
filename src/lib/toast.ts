import { toast } from 'sonner';

type _type = 'success' | 'error' | 'info' | 'warning' | undefined;

const sonnerToast = (type: _type, content: any) => {
  const { message } = content || {};

  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warning':
      toast.info(message);
      break;
    default:
      toast.info('Invalid toast type');
      break;
  }
};

export { sonnerToast };
