import { Button, SideBar } from '@repo/ui/components';
import React, { ReactNode } from 'react';
export const SideBarComponent = () => {
  return (
    <SideBar>
      <Button type="button" appName="web">
        Options
      </Button>
      <Button type="button" appName="web">
        Options
      </Button>
    </SideBar>
  );
};
