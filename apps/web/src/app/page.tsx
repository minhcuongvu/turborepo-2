import { Metadata, ResolvingMetadata } from 'next';
import { Page } from '@/components/page';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { Container, Flex, IconButton } from '@radix-ui/themes';
import { FramerMotionBasic, ScrollToTop } from '@repo/ui/components';
import FooterComponent from '@/components/layout/footer';
import { SunIcon } from '@radix-ui/react-icons';
import TestRedux from '@/components/test-redux';
import SignupForm from '../components/signup-form';
import { decrypt, getSession, login, logout } from '@/lib/session';
import { redirect } from 'next/navigation';
import { auth, signIn, signOut } from '@/auth';

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
        {/* <SignupForm /> */}
        <FramerMotionBasic />
        <section className='max-w-lg mx-auto'>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className='text-black dark:text-white px-4 py-2 border-2 border-black dark:border-white rounded-md' type="submit">Login</button>
          </form>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className='text-black dark:text-white px-4 py-2 border-2 border-black dark:border-white rounded-md' type="submit">Logout</button>
          </form>
        </section>
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
