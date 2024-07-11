import React from 'react';

const usePostFeed = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return { isOpenPostFeed: isOpen, toggleOpenPostFeed: toggleOpen };
};

export default usePostFeed;
