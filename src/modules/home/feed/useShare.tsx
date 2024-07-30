import React from 'react';
import urlJoin from 'url-join';
import { useToast } from '@/components/ui/use-toast';

const useShare = () => {
  const { toast } = useToast();

  const [id, setId] = React.useState<string>('');
  const [baseUrl, setBaseUrl] = React.useState<string>('');
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleOpen = (id?: string) => {
    setId(id || '');
    setIsOpen(!isOpen);
    setIsCopied(false);
  };

  const onSubmit = () => {
    setIsLoading(true);

    try {
      const url = id ? urlJoin(baseUrl, `/post/${id}`) : baseUrl;
      navigator.clipboard.writeText(url);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      setIsCopied(true);

      toast({ description: 'Link copied!' });
    }
  };

  return {
    id,
    baseUrl,
    isCopied,
    onShare: onSubmit,
    isShareOpen: isOpen,
    isSharing: isLoading,
    toggleShare: toggleOpen,
  };
};

export default useShare;
