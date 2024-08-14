'use client';

import React from 'react';

import useGetView from './useGetView';
import useShare from '../home/feed/useShare';
import useDislike from '../home/feed/useDislike';
import useDeleteFeed from '../home/feed/useDeleteFeed';

import FeedShareDialog from '../home/feed/FeedShareDialog';
import FeedDeleteDialog from '../home/feed/FeedDeleteDialog';

interface ViewTypes {
  data: null;
  isLoading: boolean;
  toggleShare: () => void;
  toggleDelete: () => void;
}

const ViewProps: ViewTypes = {
  data: null,
  isLoading: false,
  toggleShare: () => {},
  toggleDelete: () => {},
};

const ViewContext = React.createContext(ViewProps);

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useGetView();

  const { onDelete, isDeleteOpen, isDeleting, toggleDelete } = useDeleteFeed();
  const { onShare, toggleShare, isSharing, isShareOpen, ...shareProps } = useShare();

  return (
    <ViewContext.Provider value={{ data, isLoading, toggleDelete, toggleShare }}>
      {children}

      <FeedDeleteDialog
        onSubmit={onDelete}
        isOpen={isDeleteOpen}
        isLoading={isDeleting}
        toggleOpen={toggleDelete}
      />

      <FeedShareDialog
        onSubmit={onShare}
        isOpen={isShareOpen}
        isLoading={isSharing}
        toggleOpen={toggleShare}
        {...shareProps}
      />
    </ViewContext.Provider>
  );
};

export const useView = () => React.useContext(ViewContext);
