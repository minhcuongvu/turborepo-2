import { ButtonRect, Header } from '@repo/ui/components';

export default function HeaderComponent() {
  return (
    <Header>
      <ButtonRect type="button" direction="bottom-right" haveBorder={true}>
        Home
      </ButtonRect>
      <ButtonRect type="button" direction="right" haveBorder={true}>
        About
      </ButtonRect>
      <ButtonRect type="button" direction="top-right" haveBorder={true}>
        Footer
      </ButtonRect>
    </Header>
  );
}
