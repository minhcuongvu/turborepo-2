import MainComponent from '@/components/layout/main';
import {
  FramerMotionBasic,
  Hello,
  Root,
  ScrollToTop,
  Skeleton,
} from '@repo/ui/components';
import { Suspense } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { ThemeProvider } from '@/components/theme';
//import ScrollToTop from '@/components/scroll-to-top';
import HeaderComponent from '@/components/layout/header';
import FooterComponent from '@/components/layout/footer';
import { Flex } from '@radix-ui/themes';

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
type ParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// seems like "export const metadata: Metadata = {}" doesnt work with server page
export async function generateMetadata(
  { params, searchParams }: ParamProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: {
      absolute: 'Home',
    },
  };
}

export default async function Home() {
  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <Suspense fallback={<Skeleton />}>
          <Flex className="text-center text-black dark:text-white">
            <p>
              Hello <span className="dark:italic">there</span>
            </p>
          </Flex>
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <div className="flex">
            <FramerMotionBasic />
          </div>
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <div className="text-black dark:text-white"></div>
        </Suspense>
      </MainComponent>
      <ScrollToTop />
      <FooterComponent />
    </>
  );
}
