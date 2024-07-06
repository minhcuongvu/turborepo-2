import { Root } from '@repo/ui/components';
import React from 'react';
import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { SideBarComponent } from '@/components/layout/sidebar';
import SendIt from '@/components/send-it';

export default function About({
  params,
  searchParams,
}: {
  params?: any;
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <Root>
      <HeaderComponent />
      <MainComponent>
        <SendIt />
      </MainComponent>
      <SideBarComponent />
    </Root>
  );
}
