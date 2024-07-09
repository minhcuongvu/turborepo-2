import { Button, SideBar } from '@repo/ui/components';
import React, { ReactNode } from 'react';

export const SideBarComponent = () => {
  return (
    <SideBar>
      <Button
        direction="bottom-left"
        type="button"
        appName="web"
        haveBorder={true}
      >
        Message
      </Button>
      <Button direction="left" type="button" appName="web" haveBorder={true}>
        Do stuff
      </Button>
    </SideBar>
  );
};
