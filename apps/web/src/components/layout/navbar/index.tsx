'use client';

import { switchAccentColor } from '@/lib/features/themeSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';
import { AccentColorSwitcherDropdown, Navbar } from '@repo/ui/components';
import { AccentColor, AccentColorOptions } from '@repo/ui/interfaces';
import { useTheme } from 'next-themes';
import { useCallback, useEffect } from 'react';

export default function NavComponent() {
  const { resolvedTheme, setTheme } = useTheme();
  const { accentColor } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  // Wrap the handler function in useCallback to prevent it from changing on every render
  const switchAccentColorHandler = useCallback(
    (color: AccentColor) => {
      dispatch(switchAccentColor(color));
      localStorage.setItem('accentColor', color);
      document.documentElement.setAttribute('accentColor', color);
    },
    [dispatch]
  );

  const switchTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    document.documentElement.setAttribute('theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedColor =
      (localStorage.getItem('accentColor') as AccentColor) ?? 'red';
    switchAccentColorHandler(savedColor);
    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, [switchAccentColorHandler]);

  return (
    <Navbar>
      <Flex className="flex absolute right-0" pr="4" gap="4" align="center">
        <IconButton
          className="cursor-pointer text-black dark:text-white"
          type="button"
          onClick={switchTheme}
          variant="ghost"
          size="3"
        >
          {resolvedTheme === 'light' ? (
            <MoonIcon width="20" height="20" />
          ) : (
            <SunIcon width="20" height="20" />
          )}
        </IconButton>
      </Flex>
    </Navbar>
  );
}

//<AccentColorSwitcherDropdown
//  data={accentColor as AccentColor}
//  setData={switchAccentColorHandler}
//  items={AccentColorOptions}
///>
