'use client';

import React from 'react';

import useGetView from './useGetView';
import useShare from '../home/feed/useShare';
import useDeleteFeed from '../home/feed/useDeleteFeed';

import FeedShareDialog from '../home/feed/FeedShareDialog';
import FeedDeleteDialog from '../home/feed/FeedDeleteDialog';

interface ViewTypes {
  data: null;
  isLoading: boolean;
  reloadView: () => void;
  toggleShare: () => void;
  toggleDelete: () => void;
}

const ViewProps: ViewTypes = {
  data: null,
  isLoading: false,
  reloadView: () => {},
  toggleShare: () => {},
  toggleDelete: () => {},
};

const ViewContext = React.createContext(ViewProps);

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, reload: reloadView } = useGetView();

  const { onDelete, isDeleteOpen, isDeleting, toggleDelete } = useDeleteFeed();
  const { onShare, toggleShare, isSharing, isShareOpen, ...shareProps } = useShare();

  return (
    <ViewContext.Provider value={{ data, isLoading, toggleDelete, toggleShare, reloadView }}>
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
