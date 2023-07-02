import { configureStore } from "@reduxjs/toolkit";
import { chapterReducer } from "./chaptersSlice";

const store = configureStore({
  reducer: {
    chapters: chapterReducer,
  },
});

export default store;
