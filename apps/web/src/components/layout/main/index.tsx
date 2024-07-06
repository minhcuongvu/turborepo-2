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

export default function MainComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <MainContainer>
      <Main>
        <NavComponent />
        <MainContentWrapper>
          {children !== undefined ? (
            children
          ) : (
            <>
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
            </>
          )}
        </MainContentWrapper>
      </Main>
    </MainContainer>
  );
}

const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-5 pt-3 pb-10 flex flex-col items-center">{children}</div>
  );
};
