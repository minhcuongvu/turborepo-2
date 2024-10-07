import { FramerMotionBasic, PageWrapper, Root, Skeleton } from '@repo/ui/components';
import React, { Suspense } from 'react';
import MainComponent from '@/components/layout/main';
import SendIt from '@/components/send-it';
import { Metadata } from 'next';
import HeaderComponent from '@/components/layout/header';
import FooterComponent from '@/components/layout/footer';

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
        <FramerMotionBasic />
      </MainComponent>
      <FooterComponent />
    </>
  );
}
