import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { Page } from '@/components/page';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { FramerMotionBasic, Skeleton } from '@repo/ui/components';
import SendIt from '@/components/send-it';
import FooterComponent from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'About',
};

//export default function About({
//  params,
//  searchParams,
//}: {
//  params?: any;
//  searchParams?: { [key: string]: string | undefined };
//}) {
//  return (
//    <Page />
//  );
//}
const About = () => {
  return (
    <>
      <Page>
        <HeaderComponent />
        <MainComponent>
          <Suspense fallback={<Skeleton />}>
            <SendIt />
          </Suspense>
          <FramerMotionBasic />
        </MainComponent>
        <FooterComponent />
      </Page>
    </>
  );
};
export default About;
