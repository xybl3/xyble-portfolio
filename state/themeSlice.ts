import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: true,
  reducers: {
    setDark: () => true,
    setLight: () => false,
  },
});

export const { setDark, setLight } = themeSlice.actions;

export default themeSlice;
