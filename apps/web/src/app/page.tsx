import { Metadata, ResolvingMetadata } from 'next';
import { Page } from '@/components/page';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { Button, Container, Dialog, Flex, IconButton, TextField, Theme } from '@radix-ui/themes';
import { FramerMotionBasic, ScrollToTop } from '@repo/ui/components';
import FooterComponent from '@/components/layout/footer';
import { SunIcon } from '@radix-ui/react-icons';
import TestRedux from '@/components/test-redux';
import SignupForm from '../components/signup-form';
import { decrypt, getSession, login, logout } from '@/lib/session';
import { redirect } from 'next/navigation';
import { auth, signIn, signOut } from '@/auth';
import { Text } from '@radix-ui/themes/components/callout';
import SignInButton from '@/components/sign-in-button';
import SignInDialog from '@/components/sign-in-dialog';

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
