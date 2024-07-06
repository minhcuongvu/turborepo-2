import { ButtonRect, SideBar } from '@repo/ui/components';
import React, { ReactNode } from 'react';

export const SideBarComponent = () => {
  return (
    <SideBar>
      <ButtonRect
        direction="bottom-left"
        type="button"
        appName="web"
        haveBorder={true}
      >
        Message
      </ButtonRect>
      <ButtonRect
        direction="left"
        type="button"
        appName="web"
        haveBorder={true}
      >
        Do stuff
      </ButtonRect>
    </SideBar>
  );
};
