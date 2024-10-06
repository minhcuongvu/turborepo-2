import MainComponent from '@/components/layout/main';
import { DivContainer, FramerMotionBasic, Hello, Root, Skeleton, SpanContainer } from '@repo/ui/components';
import { Suspense } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { ThemeProvider } from '@/components/theme';

// https://codepen.io/jh3y/pen/zYmVobx
// https://codepen.io/jh3y/pen/YzdyjrG
// https://codepen.io/jh3y/pen/eYLKGLK
// https://codepen.io/jh3y/pen/BaOyjgj
// https://codepen.io/jh3y/pen/LYBdKXE
// https://codepen.io/jh3y/pen/VwBbyxK
// https://codepen.io/jh3y/pen/LYgjpYZ
// https://codepen.io/jh3y/pen/RmZLXp
// https://codepen.io/jh3y/pen/BaNOJWK
// https://codepen.io/jh3y/pen/dqzgOW
// 404 https://codepen.io/jh3y/pen/OboGqW

// https://www.sliderrevolution.com/resources/css-animated-background/
// https://codepen.io/alvarotrigo/pen/yLxxxJZ
// https://codepen.io/mindsculpt/pen/JJWEJE
// https://codepen.io/osorina/pen/PQdMOO
// https://codepen.io/RSH87/pen/gMdJKQ
// https://codepen.io/sarazond/pen/LYGbwj
// https://codepen.io/kootoopas/pen/kGPoaB
// https://codepen.io/YusukeNakaya/pen/xNdvKW
// https://codepen.io/YusukeNakaya/pen/XyOaBj
// https://codepen.io/Lewitje/pen/BNNJjo
// https://codepen.io/BjornRombaut/pen/mOLGgX
// https://codepen.io/P1N2O/pen/pyBNzX
// https://codepen.io/beshoooo/pen/jmbGNd
// https://codepen.io/kristan/pen/BYrOVy
// https://codepen.io/Sepion/pen/ZQJyeq
// https://codepen.io/vubon/pen/bdmvbY

// sticky page progress bar
// https://codepen.io/pardeepchauhan/pen/gObOZVm
// https://codepen.io/LucasZapico/pen/yGXjVw

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

export default async function Home() {
  return (
    <>
      <MainComponent>
        <Suspense fallback={<Skeleton />}>
          <DivContainer tailwindStyle="text-center text-black dark:text-white">
            <p>Hello there, I&apos;m <SpanContainer tailwindStyle='text-black dark:text-white'>Adrian</SpanContainer></p>
          </DivContainer>
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <FramerMotionBasic />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <DivContainer tailwindStyle='text-black dark:text-white'>
            <p>
              <SpanContainer>
                Here you can see some of the projects that I&apos;ve made public
              </SpanContainer>
            </p>
          </DivContainer>
        </Suspense>
      </MainComponent>
    </>
  );
}
