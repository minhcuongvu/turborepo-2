import { Root, Skeleton } from '@repo/ui/components';
import React, { Suspense } from 'react';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { SideBarComponent } from '@/components/layout/sidebar';
import SendIt from '@/components/send-it';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme';

export const metadata: Metadata = {
  title: 'About',
};

export default function About({
  params,
  searchParams,
}: {
  params?: any;
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <Suspense fallback={<Skeleton />}>
          <SendIt />
        </Suspense>
      </MainComponent>
      <SideBarComponent />
    </>
  );
}
