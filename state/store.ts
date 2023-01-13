import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "./localStorage";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
  preloadedState: loadState(),
});
