'use client';

import { useTheme } from '@/components/theme';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';
import { Button, Navbar, NavBarContainer } from '@repo/ui/components';

export default function NavComponent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Navbar>
      <IconButton
        className="text-black dark:text-white"
        type="button"
        onClick={toggleTheme}
        variant="ghost"
        size="3"
        //highContrast
      >
        {theme === 'light' ? (
          <MoonIcon width="20" height="20" />
        ) : (
            <SunIcon width="20" height="20" />
          )}
      </IconButton>
      <Flex className='absolute right-0' pr="4" gap="4" align="center">
        <Button className="text-black dark:text-white" type="button">
          Lang
        </Button>
        <IconButton
          className="text-black dark:text-white"
          type="button"
          onClick={toggleTheme}
          variant="ghost"
          size="3"
          //highContrast
        >
          {theme === 'light' ? (
            <MoonIcon width="20" height="20" />
          ) : (
              <SunIcon width="20" height="20" />
            )}
        </IconButton>
      </Flex>
    </Navbar>
  );
}
