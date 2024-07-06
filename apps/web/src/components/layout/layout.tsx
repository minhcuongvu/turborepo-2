'use client';
import React, { Suspense, useState } from 'react';
import HeaderComponent from './header';
import { Root, Skeleton } from '@repo/ui/components';
import HelloAwait from '../hello-await';
import LinksPanelComponent from '../panel/links-panel-full';
import MainComponent from './main';
import NavComponent from './navbar';
import { SideBarComponent } from './sidebar';

export default function LayoutComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [checked, setChecked] = useState(false);

  function handleClick() {
    setChecked(!checked);
  }

  return (
    <Root>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <SideBarComponent />
    </Root>
  );
}
