import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { SideBarComponent } from '@/components/layout/sidebar';
import { Root } from '@repo/ui/components';

// https://codepen.io/jh3y/pen/ZEjBwQe
// https://codepen.io/jh3y/pen/NyxzwQ
// https://codepen.io/jh3y/pen/abNveXb

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Root>
      <HeaderComponent />
      <MainComponent />
      <SideBarComponent />
    </Root>
  );
}
