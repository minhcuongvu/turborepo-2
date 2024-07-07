import { Root, Skeleton } from '@repo/ui/components';
import React, { Suspense } from 'react';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { SideBarComponent } from '@/components/layout/sidebar';
import SendIt from '@/components/send-it';

export default function About({
  params,
  searchParams,
}: {
  params?: any;
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <Root>
      <HeaderComponent />
      <MainComponent>
        <Suspense fallback={<Skeleton />}>
          <SendIt />
        </Suspense>
      </MainComponent>
      <SideBarComponent />
    </Root>
  );
}
