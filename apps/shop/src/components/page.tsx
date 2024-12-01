'use client';

import { Flex, Theme } from '@radix-ui/themes';
import { PageWrapper, Root, ScrollToTop } from '@repo/ui/components';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { useAppSelector } from '@repo/lib/hooks';
import { AccentColor } from '@repo/ui/interfaces';

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  const { accentColor, theme } = useAppSelector((state) => state.theme);
  return (
    <ThemeProvider attribute="class" defaultTheme={theme}>
      <Theme appearance={theme} accentColor={accentColor as AccentColor}>
        <Root>
          <PageWrapper>{children}</PageWrapper>
        </Root>
      </Theme>
    </ThemeProvider>
  );
};
