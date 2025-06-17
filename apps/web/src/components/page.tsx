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
  const { accentColor } = useAppSelector((state) => state.theme);
  return (
    <Root>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        disableTransitionOnChange
      >
        <Theme accentColor={accentColor}>
          <PageWrapper className="">{children}</PageWrapper>
        </Theme>
      </ThemeProvider>
    </Root>
  );
};
