import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { SideBarComponent } from '@/components/layout/sidebar';
import { Root } from '@repo/ui/components';

export default function Home() {
  return (
    <Root>
      <HeaderComponent />
      <MainComponent />
      <SideBarComponent />
    </Root>
  );
}
