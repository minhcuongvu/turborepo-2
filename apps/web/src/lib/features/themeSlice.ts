import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
  accentColor: 'red',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
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
