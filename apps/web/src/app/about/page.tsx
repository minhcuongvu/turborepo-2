import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { FramerMotionBasic } from '@repo/ui/components';
import FooterComponent from '@/components/layout/footer';
import { signIn, signOut, auth } from '@/auth';

const About = async () => {
  const session = await auth();
  return (
    <>
      <HeaderComponent />
      <MainComponent>
        {/* <Suspense fallback={<Skeleton />}>
          <SendIt />
        </Suspense> */}
        <section className='max-w-lg mx-auto'>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button type="submit">Login</button>
          </form>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Logout</button>
          </form>
        </section>
        <section className='max-w-lg mx-auto'>
          {session && <pre className='whitespace-pre-wrap'>{JSON.stringify(session.user, null, 2)}</pre>}
        </section>
        <section className='max-w-lg mx-auto'>
          {session && <pre className='whitespace-pre-wrap'>{JSON.stringify(session.googleId, null, 2)}</pre>}
        </section>
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
        <FramerMotionBasic />
      </MainComponent >
      <FooterComponent />
    </>
  );
};
export default About;
