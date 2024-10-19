import MainComponent from '@/components/layout/main';
import { FramerMotionBasic, ScrollToTop, Skeleton } from '@repo/ui/components';
import { Suspense } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
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
        <Flex className="text-center text-black dark:text-white">
          <p>
            Hello <span className="dark:italic">there</span>
          </p>
        </Flex>
        <Suspense fallback={<Skeleton />}>
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
          <FramerMotionBasic />
        </Suspense>
      </MainComponent>
      <ScrollToTop />
      <FooterComponent />
    </>
  );
}
//<Suspense fallback={<Skeleton />}>
//  <FramerMotionBasic />
//</Suspense>
