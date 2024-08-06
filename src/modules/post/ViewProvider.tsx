'use client';

import React from 'react';
import useGetView from './useGetView';

interface ViewTypes {
  data: any;
  isLoading: boolean;
}

const ViewProps: ViewTypes = {
  data: null,
  isLoading: false,
};

const ViewContext = React.createContext(ViewProps);

export const ViewProvider = ({ children }: any) => {
  const { data, isLoading } = useGetView();

  return <ViewContext.Provider value={{ data, isLoading }}>{children}</ViewContext.Provider>;
};

export const useView = () => React.useContext(ViewContext);
