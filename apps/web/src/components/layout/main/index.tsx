import { Button, Main, MainContainer, SideBar } from '@repo/ui/components';
import React, { ReactNode } from 'react';

export default function MainComponent({
  children,
}: {
  children: React.ReactNode | any;
}) {
  return (
    <MainContainer>
      <Main>{children}</Main>
    </MainContainer>
  );
}
