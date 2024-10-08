'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { PageWrapper, Root } from '@repo/ui/components';
import { Theme } from '@radix-ui/themes';
import { AccentColor, AccentColorOptions } from '@repo/ui/interfaces';

type ThemeColor = 'light' | 'dark';

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
  const [theme, setTheme] = useState<ThemeColor>('dark');
  const [accentColor, setAccentColor] = useState<AccentColor>('red');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const switchAccentColor = (color: AccentColor) => {
    localStorage.setItem('accentColor', color);
    document.documentElement.setAttribute('accentColor', color);
    setAccentColor(color);
  };

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
    localStorage.setItem('theme', theme);

    const savedColor =
      (localStorage.getItem('accentColor') as AccentColor) || 'red';
    setAccentColor(savedColor);
    console.log(savedColor);
    document.documentElement.setAttribute('accentColor', savedColor);
    localStorage.setItem('accentColor', savedColor);
  }, [theme, accentColor]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        accentColor,
        switchAccentColor,
        AccentColorOptions,
      }}
    >
      <body className={theme}>
        <Theme accentColor={accentColor} hasBackground={false}>
          <Root>
            <PageWrapper>{children}</PageWrapper>
          </Root>
        </Theme>
      </body>
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
