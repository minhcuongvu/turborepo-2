import { Root, Skeleton } from '@repo/ui/components';
import React, { Suspense } from 'react';
import MainComponent from '@/components/layout/main';
import SendIt from '@/components/send-it';
import { Metadata } from 'next';

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
    <MainComponent>
      <Suspense fallback={<Skeleton />}>
        <SendIt />
      </Suspense>
    </MainComponent>
  );
}
