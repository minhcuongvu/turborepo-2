import { Button, SideBar } from '@repo/ui/components';
import React, { ReactNode } from 'react';

export const SideBarComponent = () => {
  return (
    <SideBar>
      <Button
        type="button"
      >
        Message
      </Button>
      <Button
        type="button"
      >
        Do stuff
      </Button>
    </SideBar>
  );
};
