'use client';

import { switchAccentColor } from '@/lib/features/themeSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button, Container, Flex, IconButton, Text } from '@radix-ui/themes';
import { AccentColorSwitcherDropdown, Navbar } from '@repo/ui/components';
import { AccentColor, AccentColorOptions } from '@repo/ui/interfaces';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';
import { setTheme as themeSeliceSetTheme } from '@/lib/features/themeSlice';

export default function NavComponent() {
  const { resolvedTheme, setTheme } = useTheme();
  const { theme, accentColor } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  // State to manage theme loading
  const [isThemeReady, setIsThemeReady] = useState(false);

  // Wrap the handler function in useCallback to prevent it from changing on every render
  const switchAccentColorHandler = useCallback(
    (color: AccentColor) => {
      dispatch(switchAccentColor(color));
      localStorage.setItem('accentColor', color);
      document.documentElement.setAttribute('accentColor', color);
    },
    [dispatch]
  );

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    dispatch(themeSeliceSetTheme(newTheme));

    document.documentElement.setAttribute('theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

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
          <IconButton
            className="cursor-pointer text-black dark:text-white"
            type="button"
            onClick={toggleTheme}
            variant="ghost"
            size="3"
            aria-label={resolvedTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {resolvedTheme === 'light' ? (
              <MoonIcon width="20" height="20" />
            ) : (
              <SunIcon width="20" height="20" />
            )}
          </IconButton>
        )}
      </Flex>
    </Navbar>
  );
}
