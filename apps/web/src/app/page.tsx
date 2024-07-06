import HelloAwait from '@/components/hello-await';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import NavComponent from '@/components/layout/navbar';
import { SideBarComponent } from '@/components/layout/sidebar';
import LinksPanelComponent from '@/components/links-panel-full';
import {
  Button,
  Code,
  Header,
  Main,
  Root,
  SideBar,
  Skeleton,
} from '@repo/ui/components';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Root>
      <HeaderComponent />
      <MainComponent>
        <NavComponent />
        <Suspense fallback={null}>
          <HelloAwait />
        </Suspense>
        <Button type="button" appName="web">
          Button
        </Button>
        <Suspense fallback={<Skeleton />}>
          <LinksPanelComponent />
          <LinksPanelComponent />
          <LinksPanelComponent />
          <LinksPanelComponent />
          <LinksPanelComponent />
        </Suspense>
      </MainComponent>
      <SideBarComponent />
    </Root>
  );
}
