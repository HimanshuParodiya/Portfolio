import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Slice/ThemeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;
