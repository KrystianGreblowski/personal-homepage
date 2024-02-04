import { createSlice } from "@reduxjs/toolkit";
import { getDarkThemeStateFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "themeMode",
  initialState: {
    darkTheme: getDarkThemeStateFromLocalStorage(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const isDarkTheme = (state) => state.themeMode.darkTheme;

export default themeSlice.reducer;
