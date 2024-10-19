'use client';

import React, { createContext, useContext, ReactNode, useEffect, useCallback } from 'react';
import { PageWrapper, Root } from '@repo/ui/components';
import { Theme } from '@radix-ui/themes';
import {
  AccentColor,
  AccentColorOptions,
  ThemeColor,
} from '@repo/ui/interfaces';
import { toggleTheme, switchAccentColor } from '@/lib/features/themeSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

interface ThemeContextType {
  theme: ThemeColor;
  toggleTheme: () => void;
  accentColor: AccentColor;
  switchAccentColor: (value: AccentColor) => void;
  AccentColorOptions: { value: AccentColor; label: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const { theme, accentColor } = useAppSelector((state) => state.theme);

  // Wrap the handler function in useCallback to prevent it from changing on every render
  const switchAccentColorHandler = useCallback((color: AccentColor) => {
    dispatch(switchAccentColor(color));
    localStorage.setItem('accentColor', color);
    document.documentElement.setAttribute('accentColor', color);
  }, [dispatch]);

  useEffect(() => {
    const savedColor =
      (localStorage.getItem('accentColor') as AccentColor) || 'red';
    switchAccentColorHandler(savedColor);

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.documentElement.setAttribute('theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, switchAccentColorHandler]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme as ThemeColor,
        toggleTheme: () => dispatch(toggleTheme()),
        accentColor: accentColor as AccentColor,
        switchAccentColor: switchAccentColorHandler,
        AccentColorOptions,
      }}
    >
      <Theme accentColor={accentColor as AccentColor} hasBackground={false}>
        <Root>
          <PageWrapper>{children}</PageWrapper>
        </Root>
      </Theme>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
