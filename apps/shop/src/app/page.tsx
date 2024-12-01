'use client';

import { Metadata, ResolvingMetadata } from 'next';
import { Page } from '@/components/page';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { Container, Flex, IconButton } from '@radix-ui/themes';
import { Button, FramerMotionBasic, ScrollToTop } from '@repo/ui/components';
import FooterComponent from '@/components/layout/footer';
import { SunIcon } from '@radix-ui/react-icons';
import TestRedux from '@/components/test-redux';
import { Processor } from 'postcss';
import { ThemeColor } from '@repo/ui/interfaces';
import { sendIt } from '@/actions/example-actions';
import { useRouter } from 'next/navigation';

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
//type ParamProps = {
//  params: { id: string };
//  searchParams: { [key: string]: string | string[] | undefined };
//};

// seems like "export const metadata: Metadata = {}" doesnt work with server page
//export async function generateMetadata(
//  { params, searchParams }: ParamProps,
//  parent: ResolvingMetadata
//): Promise<Metadata> {
//  return {
//    title: {
//      absolute: 'Home',
//    },
//  };
//}

const Home = () => {
  const router = useRouter();
  return (
    <Page>
      <HeaderComponent />
      <MainComponent>
        <Flex className="text-center text-black dark:text-white">
          <p>
            Hello <span className="dark:italic">there</span>
          </p>
        </Flex>
        <Flex className="text-center text-black dark:text-white">
          <p>Welcome to our shop!</p>
        </Flex>
        <Button onClick={() => router.push('/about')}>About</Button>
        <FramerMotionBasic />
      </MainComponent>
      <FooterComponent />
      <ScrollToTop />
    </Page>
  );
};
export default Home;
