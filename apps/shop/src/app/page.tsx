'use client';

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
