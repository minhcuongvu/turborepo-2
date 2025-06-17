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

const Home = async () => {
  const session = await getSession();
  const parsed = await decrypt(session?.value || '')
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
            action={async (formData) => {
              "use server";
              await login(formData);
              redirect("/");
            }}
          >
            <input type="email" placeholder="Email" />
            <br />
            <button type="submit">Login</button>
          </form>
          <form
            action={async () => {
              "use server";
              await logout();
              redirect("/");
            }}
          >
            <button type="submit">Logout</button>
          </form>
          <pre className='whitespace-pre-wrap'>{JSON.stringify(parsed, null, 2)}</pre>
        </section>
      </MainComponent>
      <FooterComponent />
      <ScrollToTop />
    </>
  );
};
export default Home;
