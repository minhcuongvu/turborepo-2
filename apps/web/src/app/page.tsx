import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { SideBarComponent } from '@/components/layout/sidebar';
import { FramerMotionBasic, Root, Skeleton } from '@repo/ui/components';
import { Suspense } from 'react';
import HelloAwait from '@/components/hello-await';
import LinksPanelComponent from '@/components/panel/links-panel-full';
import { Metadata, ResolvingMetadata } from 'next';

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
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// seems like "export const metadata: Metadata = {}" doesnt work with server page
export async function generateMetadata(
  { params, searchParams }: Props,
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
      <Root>
        <HeaderComponent />
        <MainComponent>
          <Suspense fallback={<Skeleton />}>
            <HelloAwait />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <FramerMotionBasic />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <LinksPanelComponent />
            <LinksPanelComponent />
            <LinksPanelComponent />
            <LinksPanelComponent />
            <LinksPanelComponent />
            <LinksPanelComponent />
            <LinksPanelComponent />
            <LinksPanelComponent />
            <LinksPanelComponent />
            <LinksPanelComponent />
            <LinksPanelComponent />
            <LinksPanelComponent />
          </Suspense>
        </MainComponent>
        <SideBarComponent />
      </Root>
    </>
  );
}
