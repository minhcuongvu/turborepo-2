'use client';

import {
  switchAccentColor,
  //setTheme as themeSliceSetTheme,
} from '@/lib/features';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button, Container, Flex, IconButton, Text } from '@radix-ui/themes';
import { AccentColorSwitcherDropdown, Navbar } from '@repo/ui/components';
import { AccentColor, AccentColorOptions } from '@repo/ui/interfaces';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

export default function NavComponent() {
  const { resolvedTheme, setTheme } = useTheme();
  const dispatch = useAppDispatch();

  // State to manage theme loading
  const [isThemeReady, setIsThemeReady] = useState(false);

  // Wrap the handler function in useCallback to prevent it from changing on every render
  const switchAccentColorHandler = useCallback(
    (color: AccentColor) => {
      dispatch(switchAccentColor(color));
      localStorage.setItem('accentColor', color);
      //document.documentElement.setAttribute('accentColor', color);
    },
    [dispatch]
  );

  useEffect(() => {
    // Check if the theme has been resolved after mount
    setIsThemeReady(true);
    const savedColor =
      (localStorage.getItem('accentColor') as AccentColor) ?? 'red';
    switchAccentColorHandler(savedColor);
  }, [switchAccentColorHandler]);

  return (
    <Navbar>
      <Flex className="flex absolute right-0" pr="4" gap="4" align="center">
        {isThemeReady && (
          <>
            <IconButton
              className="cursor-pointer text-black dark:text-white"
              type="button"
              onClick={() => setTheme('dark')}
              variant="ghost"
              size="3"
              aria-label="Switch to dark theme"
            >
              <MoonIcon width="20" height="20" />
            </IconButton>
            <IconButton
              className="cursor-pointer text-black dark:text-white"
              type="button"
              onClick={() => setTheme('light')}
              variant="ghost"
              size="3"
              aria-label="Switch to light theme"
            >
              <SunIcon width="20" height="20" />
            </IconButton>
          </>
        )}
      </Flex>
    </Navbar>
  );
}
