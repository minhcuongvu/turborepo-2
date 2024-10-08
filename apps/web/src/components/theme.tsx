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
type AccentColor =
| 'gray'
| 'gold'
| 'bronze'
| 'brown'
| 'yellow'
| 'amber'
| 'orange'
| 'tomato'
| 'red'
| 'ruby'
| 'crimson'
| 'pink'
| 'plum'
| 'purple'
| 'violet'
| 'iris'
| 'indigo'
| 'blue'
| 'cyan'
| 'teal'
| 'jade'
| 'green'
| 'grass'
| 'lime'
| 'mint'
| 'sky';

const accentColorOptions: { value: AccentColor; label: string }[] = [
  { value: 'gray', label: 'Gray' },
  { value: 'gold', label: 'Gold' },
  { value: 'bronze', label: 'Bronze' },
  { value: 'brown', label: 'Brown' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'amber', label: 'Amber' },
  { value: 'orange', label: 'Orange' },
  { value: 'tomato', label: 'Tomato' },
  { value: 'red', label: 'Red' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'crimson', label: 'Crimson' },
  { value: 'pink', label: 'Pink' },
  { value: 'plum', label: 'Plum' },
  { value: 'purple', label: 'Purple' },
  { value: 'violet', label: 'Violet' },
  { value: 'iris', label: 'Iris' },
  { value: 'indigo', label: 'Indigo' },
  { value: 'blue', label: 'Blue' },
  { value: 'cyan', label: 'Cyan' },
  { value: 'teal', label: 'Teal' },
  { value: 'jade', label: 'Jade' },
  { value: 'green', label: 'Green' },
  { value: 'grass', label: 'Grass' },
  { value: 'lime', label: 'Lime' },
  { value: 'mint', label: 'Mint' },
  { value: 'sky', label: 'Sky' },
];

interface ThemeContextType {
  theme: ThemeColor;
  toggleTheme: () => void;
  accentColor: AccentColor;
  switchAccentColor: (value: AccentColor) => void;
  accentColorOptions: { value: AccentColor; label: string }[];
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
    setAccentColor(color);
  };

  useEffect(() => {
    // Update the class on the html element
    document.documentElement.setAttribute('theme', theme);
    // Optionally store the theme in localStorage
    localStorage.setItem('theme', theme);

    document.documentElement.setAttribute('accentColor', accentColor);
    localStorage.setItem('accentColor', accentColor);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentColor, switchAccentColor, accentColorOptions }}>
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
