import { Button, Header } from '@repo/ui/components';

export default function HeaderComponent() {
  return (
    <Header>
      <Button type="button" appName="web">
        Home
      </Button>
      <Button type="button" appName="web">
        About
      </Button>
      <Button type="button" appName="web">
        Footer
      </Button>
    </Header>
  );
}
