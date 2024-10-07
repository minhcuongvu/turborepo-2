import MainComponent from '@/components/layout/main';
import { DivContainer, FramerMotionBasic, Hello, Root, Skeleton, SpanContainer } from '@repo/ui/components';
import { Suspense } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { ThemeProvider } from '@/components/theme';
import ScrollToTop from '@/components/scroll-to-top';

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
    <MainComponent>
      <Suspense fallback={<Skeleton />}>
        <DivContainer tailwindStyle="text-center text-black dark:text-white">
          <p>Hello <SpanContainer tailwindStyle='dark:italic'>there</SpanContainer></p>
        </DivContainer>
      </Suspense>
      <Suspense fallback={<Skeleton />}>
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
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <DivContainer tailwindStyle='text-black dark:text-white'>
        </DivContainer>
      </Suspense>
      <ScrollToTop />
    </MainComponent>
  );
}
