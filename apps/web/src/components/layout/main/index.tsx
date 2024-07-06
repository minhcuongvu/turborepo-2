import {
  Button,
  Main,
  MainContainer,
  SideBar,
  Skeleton,
} from '@repo/ui/components';
import React, { ReactNode, Suspense } from 'react';
import NavComponent from '../navbar';
import HelloAwait from '@/components/hello-await';
import LinksPanelComponent from '@/components/panel/links-panel-full';

export default function MainComponent() {
  return (
    <MainContainer>
      <Main>
        <NavComponent />
        <MainContentWrapper>
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
        </MainContentWrapper>
      </Main>
    </MainContainer>
  );
}

const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-5 flex flex-col items-center">{children}</div>;
};
