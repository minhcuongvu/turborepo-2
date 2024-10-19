import { Metadata, ResolvingMetadata } from 'next';
import { Page } from '@/components/page';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { Flex } from '@radix-ui/themes';
import { FramerMotionBasic, ScrollToTop } from '@repo/ui/components';
import FooterComponent from '@/components/layout/footer';

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
      </MainComponent>
      <ScrollToTop />
      <FooterComponent />
    </Page>
  );
};
export default Home;
