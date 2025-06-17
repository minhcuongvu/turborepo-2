'use client';
import MainComponent from '@/components/layout/main';
import HeaderComponent from '@/components/layout/header';
import FooterComponent from '@/components/layout/footer';
import { Flex } from '@radix-ui/themes';
import { Page } from '@/components/page';

export default function NotFound() {
  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <Flex className="text-center text-black dark:text-white">
          <p>
            <span className="dark:italic">404 | This page does not exist</span>
          </p>
        </Flex>
      </MainComponent>
      <FooterComponent />
    </>
  );
}
