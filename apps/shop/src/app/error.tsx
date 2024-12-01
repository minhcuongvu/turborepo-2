'use client';
import MainComponent from '@/components/layout/main';
import HeaderComponent from '@/components/layout/header';
import FooterComponent from '@/components/layout/footer';
import { Flex } from '@radix-ui/themes';

export default function Error() {
  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <Flex className="text-center text-black dark:text-white">
          <p>
            <span className="dark:italic">Err</span>
          </p>
        </Flex>
      </MainComponent>
      <FooterComponent />
    </>
  );
}
