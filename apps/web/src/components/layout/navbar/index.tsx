'use client';

import { useTheme } from '@/components/theme';
import { DivContainer, Button, Navbar, NavBarContainer, Tab, Icon } from '@repo/ui/components';
import { useRouter } from 'next/navigation';
import { relative } from 'path';

// https://codepen.io/jh3y/pen/MWLyGxo
// https://codepen.io/jh3y/pen/mdGLzNR
// https://codepen.io/jh3y/pen/eYLKGLK
// https://codepen.io/jh3y/pen/ZEjBPVZ
// https://codepen.io/jh3y/pen/GRBNvvX

export default function NavComponent() {
  const {theme, toggleTheme} = useTheme();
  return (
    <NavBarContainer>
      <DivContainer tailwindStyle='float-right flex'>
        <Button className='text-black dark:text-white' haveBorder={false} type="button">
          Lang 
        </Button>
        <Button className='text-black dark:text-white' haveBorder={false} type="button" onClick={toggleTheme}>
          {theme === 'light' ? 'Light' : 'Dark'} 
        </Button>
      </DivContainer>
    </NavBarContainer>
  );
}
