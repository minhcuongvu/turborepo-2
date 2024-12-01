import { Metadata, ResolvingMetadata } from 'next';
import { Page } from '@/components/page';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { Container, Flex, IconButton } from '@radix-ui/themes';
import { FramerMotionBasic, ScrollToTop } from '@repo/ui/components';
import FooterComponent from '@/components/layout/footer';
import { SunIcon } from '@radix-ui/react-icons';
import TestRedux from '@/components/test-redux';

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
