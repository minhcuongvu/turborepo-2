'use client';

import { Flex, Theme } from '@radix-ui/themes';
import { PageWrapper, Root, ScrollToTop } from '@repo/ui/components';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import { AccentColor } from '@repo/ui/interfaces';

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  const { accentColor } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider attribute="class">
      <Theme accentColor={accentColor as AccentColor}>
        <Root>
          <PageWrapper>{children}</PageWrapper>
        </Root>
      </Theme>
    </ThemeProvider>
  );
};
