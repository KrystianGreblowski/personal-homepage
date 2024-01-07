import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themeMode",
  initialState: {
    darkTheme: false,
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
