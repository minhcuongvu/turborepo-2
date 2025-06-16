'use client';
import { Metadata, ResolvingMetadata } from 'next';
import { Page } from '@/components/page';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { Container, Flex, IconButton } from '@radix-ui/themes';
import { FramerMotionBasic, ScrollToTop } from '@repo/ui/components';
import FooterComponent from '@/components/layout/footer';
import { SunIcon } from '@radix-ui/react-icons';
import TestRedux from '@/components/test-redux';
import { useRouter } from 'next/navigation';

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
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
      </MainComponent>
      <FooterComponent />
      <ScrollToTop />
    </Page>
  );
};
export default Home;
