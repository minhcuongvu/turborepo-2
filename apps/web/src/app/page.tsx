import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { SideBarComponent } from '@/components/layout/sidebar';
import { Button, Root, Skeleton } from '@repo/ui/components';
import { Suspense } from 'react';
import Loading from './loading';
import HelloAwait from '@/components/hello-await';
import LinksPanelComponent from '@/components/panel/links-panel-full';
import ScrollToTop from '@/components/scroll-to-top';

export default function Home() {
  return (
    <>
      <Root>
        <HeaderComponent />
        <MainComponent>
          <Suspense fallback={<Skeleton />}>
            <HelloAwait />
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
