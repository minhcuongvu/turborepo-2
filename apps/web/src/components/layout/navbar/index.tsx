'use client';

import { useTheme } from '@/components/theme';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Flex, IconButton, Theme } from '@radix-ui/themes';
import { AccentColorSwitcherDropdown, Button, Navbar } from '@repo/ui/components';

export default function NavComponent() {
  const { theme, toggleTheme, accentColor, switchAccentColor, accentColorOptions } = useTheme();
  return (
    <Navbar>
      <IconButton
        className="text-black dark:text-white"
        type="button"
        onClick={toggleTheme}
        variant="ghost"
        size="3"
      >
        {theme === 'light' ? (
          <MoonIcon width="20" height="20" />
        ) : (
            <SunIcon width="20" height="20" />
          )}
      </IconButton>
      <Flex className="flex absolute right-0" pr="4" gap="4" align="center">
        <Button className="text-black dark:text-white" type="button">
          Lang
        </Button>
        <AccentColorSwitcherDropdown data={accentColor} setData={switchAccentColor} items={accentColorOptions} />
        <IconButton
          className="text-black dark:text-white"
          type="button"
          onClick={toggleTheme}
          variant="ghost"
          size="3"
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
