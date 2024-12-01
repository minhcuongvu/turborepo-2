'use client';

import { Theme } from '@radix-ui/themes';
import { PageWrapper, Root } from '@repo/ui/components';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { useAppSelector } from '@/lib/hooks';

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  const { accentColor: stateAccentColor, theme: stateTheme } = useAppSelector((state) => state.theme);
  return (
    <ThemeProvider attribute="class" defaultTheme={stateTheme}>
      <Theme appearance={stateTheme} accentColor={stateAccentColor}>
        <Root>
          <PageWrapper>{children}</PageWrapper>
        </Root>
      </Theme>
    </ThemeProvider>
  );
};
