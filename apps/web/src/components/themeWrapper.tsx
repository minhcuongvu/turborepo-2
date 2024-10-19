'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
import { ThemeProvider } from './theme';

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  const store = makeStore();

  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default ThemeProviderWrapper;
