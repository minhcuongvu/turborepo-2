'use client';

import { useTheme } from '@/components/theme';
import { DivContainer, Button, Navbar, NavBarContainer, LightModeIcon, DarkModeIcon } from '@repo/ui/components';
import { useRouter } from 'next/navigation';
import { relative } from 'path';

export default function NavComponent() {
  const {theme, toggleTheme} = useTheme();
  return (
    <NavBarContainer>
      <DivContainer tailwindStyle='float-right flex'>
        <Button className='text-black dark:text-white' haveBorder={false} type="button">
          Lang 
        </Button>
        <Button className='text-black dark:text-white' haveBorder={false} type="button" onClick={toggleTheme}>
          {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />} 
        </Button>
      </DivContainer>
    </NavBarContainer>
  );
}
