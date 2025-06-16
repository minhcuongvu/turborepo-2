'use client';

import {
  switchAccentColor,
  //setTheme as themeSliceSetTheme,
} from '@/lib/features';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { LaptopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button, Container, Flex, IconButton, Text, Tooltip } from '@radix-ui/themes';
import { AccentColorSwitcherDropdown, Navbar } from '@repo/ui/components';
import { AccentColor, AccentColorOptions } from '@repo/ui/interfaces';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.css';

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
          <div className={`${styles.tabs} after:light:bg-black/10 after:dark:bg-white/10 h-10 grid grid-flow-col bg-neutral-900 dark:bg-neutral-800 rounded-lg relative border border-neutral-800`}>
            <input
              type="radio"
              id="html"
              name="theme"
              value="system"
              onClick={() => setTheme('system')}
              defaultChecked={resolvedTheme === 'system'}
              className="sr-only"
            />
            <label
              htmlFor="html"
              className="px-4 py-2 cursor-pointer text-center h-full flex gap-2 items-center justify-center rounded-[calc(0.5rem-1px)] text-neutral-400 dark:text-neutral-400 transition-all duration-250 hover:bg-neutral-800 dark:hover:bg-neutral-700 hover:text-neutral-100 dark:hover:text-neutral-200"
            >
              <LaptopIcon className="w-5 h-5" />
              {/* <span className="text-sm">System</span> */}
            </label>

            <input
              type="radio"
              id="css"
              name="theme"
              value="dark"
              onClick={() => setTheme('dark')}
              defaultChecked={resolvedTheme === 'dark'}
              className="sr-only"
            />
            <label
              htmlFor="css"
              className="px-4 py-2 cursor-pointer text-center h-full flex gap-2 items-center justify-center rounded-[calc(0.5rem-1px)] text-neutral-400 dark:text-neutral-400 transition-all duration-250 hover:bg-neutral-800 dark:hover:bg-neutral-700 hover:text-neutral-100 dark:hover:text-neutral-200"
            >
              <MoonIcon className="w-5 h-5" />
              {/* <span className="text-sm">Dark</span> */}
            </label>

            <input
              type="radio"
              id="javascript"
              name="theme"
              value="light"
              onClick={() => setTheme('light')}
              defaultChecked={resolvedTheme === 'light'}
              className="sr-only"
            />
            <label
              htmlFor="javascript"
              className="px-4 py-2 cursor-pointer text-center h-full flex gap-2 items-center justify-center rounded-[calc(0.5rem-1px)] text-neutral-400 dark:text-neutral-400 transition-all duration-250 hover:bg-neutral-800 dark:hover:bg-neutral-700 hover:text-neutral-100 dark:hover:text-neutral-200"
            >
              <SunIcon className="w-5 h-5" />
              {/* <span className="text-sm">Light</span> */}
            </label>
          </div>
        )}
      </Flex>
    </Navbar>
  );
}
