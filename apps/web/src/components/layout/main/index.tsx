import { DivContainer, Main, MainContainer } from '@repo/ui/components';
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
        <MainContentWrapper>{children}</MainContentWrapper>
      </Main>
    </MainContainer>
  );
}

const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <DivContainer tailwindStyle='px-5 pt-3 pb-10 flex flex-col items-center'>{children}</DivContainer>
  );
};
