import { Button, Navbar, NavBarContainer, Tab } from '@repo/ui/components';

export default function NavComponent() {
  return (
    <NavBarContainer>
      <Navbar>
        <Tab>
          <Button type="button" appName="web">
            Back
          </Button>
        </Tab>
        <Tab>
          <Button type="button" appName="web">
            Tab 1
          </Button>
        </Tab>
        <Tab>
          <Button type="button" appName="web">
            Home
          </Button>
        </Tab>
        <Tab>
          <Button type="button" appName="web">
            Tab 2
          </Button>
        </Tab>
        <Tab>
          <Button type="button" appName="web">
            Next
          </Button>
        </Tab>
      </Navbar>
    </NavBarContainer>
  );
}
