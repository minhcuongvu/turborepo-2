'use client';

import { Theme } from '@radix-ui/themes';
import { PageWrapper, Root } from '@repo/ui/components';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import { AccentColor } from '@repo/ui/interfaces';

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  const { accentColor } = useAppSelector((state) => state.theme);
  const accentColorAlt: AccentColor = accentColor; // ! TODO: fix this, default slice doesnt work
  return (
    <Root>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        disableTransitionOnChange
      >
        <Theme accentColor='gray' panelBackground='solid'>
          {/* <PageWrapper className=""> */}
          {children}
          {/* </PageWrapper> */}
        </Theme>
      </ThemeProvider>
    </Root>
  );
};
