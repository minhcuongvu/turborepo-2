'use client';

import { Button, Navbar, NavBarContainer, Tab } from '@repo/ui/components';
import { useRouter } from 'next/navigation';

export default function NavComponent() {
  const router = useRouter();
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
          <Button type="button" appName="web" onClick={() => router.push('/')}>
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
