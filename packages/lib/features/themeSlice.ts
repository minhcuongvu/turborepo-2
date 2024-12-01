import { createSlice } from '@reduxjs/toolkit';
import { AccentColor } from '@repo/ui/interfaces';

const initialState: ThemeDefaults = {
  theme: 'dark',
  accentColor: 'red',
};

type ThemeDefaults = {
  theme: 'light' | 'dark';
  accentColor: AccentColor;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    switchAccentColor: (state, action) => {
      state.accentColor = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, switchAccentColor } = themeSlice.actions;
export default themeSlice.reducer;
