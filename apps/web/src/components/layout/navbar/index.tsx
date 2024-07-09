'use client';

import { Button, Navbar, NavBarContainer, Tab } from '@repo/ui/components';
import { useRouter } from 'next/navigation';

// https://codepen.io/jh3y/pen/MWLyGxo
// https://codepen.io/jh3y/pen/mdGLzNR
// https://codepen.io/jh3y/pen/eYLKGLK
// https://codepen.io/jh3y/pen/ZEjBPVZ
// https://codepen.io/jh3y/pen/GRBNvvX

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
          <Button
            type="button"
            appName="web"
            onClick={() => router.push('/about')}
          >
            About
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
