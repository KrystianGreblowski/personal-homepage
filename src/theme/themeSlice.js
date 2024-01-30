import { createSlice } from "@reduxjs/toolkit";
import {
  getDarkThemeStateFromLocalStorage,
  getThemeButtonPositionFromLocalStorage,
} from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "themeMode",
  initialState: {
    darkTheme: getDarkThemeStateFromLocalStorage(),
    themeButtonPosition: getThemeButtonPositionFromLocalStorage(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      state.themeButtonPosition = state.darkTheme ? [0, 23] : [23, 0];
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const isDarkTheme = (state) => state.themeMode.darkTheme;

export const themeButtonPositionState = (state) =>
  state.themeMode.themeButtonPosition;

export default themeSlice.reducer;
