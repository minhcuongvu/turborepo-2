'use client';

import {
  switchAccentColor,
  //setTheme as themeSliceSetTheme,
} from '@/lib/features';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { LaptopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import {
  Button,
  Container,
  Flex,
  IconButton,
  Text,
  Tooltip,
} from '@radix-ui/themes';
import { AccentColorSwitcherDropdown, Navbar } from '@repo/ui/components';
import { AccentColor, AccentColorOptions } from '@repo/ui/interfaces';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

export default function NavComponent({ className }: { className?: string }) {
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
    <Navbar className={className}>
      <Flex className="flex absolute right-0 top-0" pr="4" pt="3" align="center">
        {isThemeReady && (
          <Flex direction='row' gap='2' className="border-2 border-black/30 dark:border-white/10 rounded-lg bg-white/20 dark:bg-black/10">
            <Flex align='center' justify='center'>
              <input
                type="radio"
                id="html"
                name="theme"
                value="system"
                onClick={() => setTheme('system')}
                defaultChecked={resolvedTheme === 'system'}
                className="sr-only peer"
              />
              <Tooltip content="System Theme">
                <label
                  htmlFor="html"
                  className="p-1 peer-checked:text-neutral-100 cursor-pointer text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  <LaptopIcon className="w-5 h-5" />
                </label>
              </Tooltip>
            </Flex>
            <Flex align='center' justify='center'>
              <input
                type="radio"
                id="css"
                name="theme"
                value="dark"
                onClick={() => setTheme('dark')}
                defaultChecked={resolvedTheme === 'dark'}
                className="sr-only peer"
              />
              <Tooltip content="Dark Mode">
                <label
                  htmlFor="css"
                  className="p-1 peer-checked:text-neutral-100 cursor-pointer text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  <MoonIcon className="w-5 h-5" />
                </label>
              </Tooltip>
            </Flex>
            <Flex align='center' justify='center'>
              <input
                type="radio"
                id="javascript"
                name="theme"
                value="light"
                onClick={() => setTheme('light')}
                defaultChecked={resolvedTheme === 'light'}
                className="sr-only peer"
              />
              <Tooltip content="Light Mode">
                <label
                  htmlFor="javascript"
                  className="p-1 peer-checked:text-neutral-900 cursor-pointer text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  <SunIcon className="w-5 h-5" />
                </label>
              </Tooltip>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Navbar>
  );
}
