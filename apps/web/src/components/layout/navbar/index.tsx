'use client';

import {
  switchAccentColor,
  //setTheme as themeSliceSetTheme,
} from '@/lib/features';
import { useAppDispatch } from '@/lib/hooks';
import { LaptopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import {
  Flex,
  Tooltip,
} from '@radix-ui/themes';
import { Navbar } from '@repo/ui/components';
import { AccentColor } from '@repo/ui/interfaces';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

interface NavComponentProps {
  className?: string;
  mobile?: boolean;         // ← new (optional) flag
  onNavigate?: () => void;  // ← new (optional) callback
}

export default function NavComponent({
  className,
  mobile = false,
  onNavigate,
}: NavComponentProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const dispatch = useAppDispatch();
  const [isThemeReady, setIsThemeReady] = useState(false);

  const switchAccentColorHandler = useCallback(
    (color: AccentColor) => {
      dispatch(switchAccentColor(color));
      localStorage.setItem('accentColor', color);
    },
    [dispatch]
  );

  useEffect(() => {
    setIsThemeReady(true);
    const savedColor =
      (localStorage.getItem('accentColor') as AccentColor) ?? 'red';
    switchAccentColorHandler(savedColor);
  }, [switchAccentColorHandler]);

  if (!isThemeReady) return null;

  return (
    <Navbar
      className={className + (mobile ? " flex-col space-y-4" : "")}
      onClick={onNavigate}
    >
      <div className="relative">
        <div className="flex items-center gap-1 p-1 rounded-lg bg-gray-100/90 dark:bg-black/10 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="system-theme"
              name="theme"
              value="system"
              onClick={() => setTheme('system')}
              defaultChecked={resolvedTheme === 'system'}
              className="sr-only peer"
            />
            <Tooltip content="System Theme">
              <label
                htmlFor="system-theme"
                className={`
                  p-2 rounded-md cursor-pointer transition-all duration-200
                  peer-checked:bg-white peer-checked:dark:bg-gray-700 
                  peer-checked:text-gray-900 peer-checked:dark:text-white 
                  peer-checked:shadow-sm
                  text-gray-500 hover:text-gray-900 
                  dark:text-gray-400 dark:hover:text-white
                  hover:bg-white/50 dark:hover:bg-gray-700/50
                `}
              >
                <LaptopIcon className="w-4 h-4" />
              </label>
            </Tooltip>
          </div>

          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="dark-theme"
              name="theme"
              value="dark"
              onClick={() => setTheme('dark')}
              defaultChecked={resolvedTheme === 'dark'}
              className="sr-only peer"
            />
            <Tooltip content="Dark Mode">
              <label
                htmlFor="dark-theme"
                className={`
                  p-2 rounded-md cursor-pointer transition-all duration-200
                  peer-checked:bg-white peer-checked:dark:bg-gray-700 
                  peer-checked:text-gray-900 peer-checked:dark:text-white 
                  peer-checked:shadow-sm
                  text-gray-500 hover:text-gray-900 
                  dark:text-gray-400 dark:hover:text-white
                  hover:bg-white/50 dark:hover:bg-gray-700/50
                `}
              >
                <MoonIcon className="w-4 h-4" />
              </label>
            </Tooltip>
          </div>

          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="light-theme"
              name="theme"
              value="light"
              onClick={() => setTheme('light')}
              defaultChecked={resolvedTheme === 'light'}
              className="sr-only peer"
            />
            <Tooltip content="Light Mode">
              <label
                htmlFor="light-theme"
                className={`
                  p-2 rounded-md cursor-pointer transition-all duration-200
                  peer-checked:bg-white peer-checked:dark:bg-gray-700 
                  peer-checked:text-gray-900 peer-checked:dark:text-white 
                  peer-checked:shadow-sm
                  text-gray-500 hover:text-gray-900 
                  dark:text-gray-400 dark:hover:text-white
                  hover:bg-white/50 dark:hover:bg-gray-700/50
                `}
              >
                <SunIcon className="w-4 h-4" />
              </label>
            </Tooltip>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
