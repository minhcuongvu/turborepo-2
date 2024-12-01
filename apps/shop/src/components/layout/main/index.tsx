import { Main, MainContainer } from '@repo/ui/components';
import React, { ReactNode, Suspense } from 'react';

export default function MainComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Main>
      <MainContentWrapper>{children}</MainContentWrapper>
    </Main>
  );
}

const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-grow px-5 pt-3 pb-10 flex flex-col items-center">
      {children}
    </div>
  );
};
