import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { Flex } from '@radix-ui/themes';
import { FramerMotionBasic, ScrollToTop } from '@repo/ui/components';
import FooterComponent from '@/components/layout/footer';
import { auth } from '@/auth';
import SignInDialog from '@/components/signin-dialog';

const Home = async () => {
  const session = await auth();
  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <Flex className="text-center text-black dark:text-white">
          <p>
            Hello <span className="dark:italic">there</span>
          </p>
        </Flex>
        <FramerMotionBasic />
        <SignInDialog />
        <FramerMotionBasic />
        <section className='max-w-lg mx-auto'>
          {session && <pre className='whitespace-pre-wrap'>{JSON.stringify(session.user, null, 2)}</pre>}
        </section>
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
      </MainComponent>
      <FooterComponent />
      <ScrollToTop />
    </>
  );
};
export default Home;
