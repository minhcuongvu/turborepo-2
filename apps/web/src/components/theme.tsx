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

type ThemeColor = 'light' | 'dark';
type AccentColor = "gray" |  "gold" |  "bronze" |  "brown" |  "yellow" |  "amber" |  "orange" |  "tomato" |  "red" |  "ruby" |  "crimson" |  "pink" |  "plum" |  "purple" |  "violet" |  "iris" |  "indigo" |  "blue" |  "cyan" |  "teal" |  "jade" |  "green" |  "grass" |  "lime" |  "mint" |  "sky";

interface ThemeContextType {
  theme: ThemeColor;
  toggleTheme: () => void;
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

  const switchAccentColor = () => {
    setAccentColor((prev) => (prev === 'red' ? 'sky' : 'red'));
  }

  useEffect(() => {
    // Update the class on the html element
    document.documentElement.setAttribute('theme', theme);
    // Optionally store the theme in localStorage
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('accentColor', accentColor);
    localStorage.setItem('accentColor', accentColor);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <body className={`${theme}`}>
        <Root>
          <Theme accentColor={`${accentColor}`} hasBackground={false}>
            <PageWrapper>
              {children}
            </PageWrapper>
          </Theme>
        </Root>
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
