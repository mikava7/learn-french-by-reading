import { configureStore } from "@reduxjs/toolkit";
import { chapterReducer } from "./chaptersSlice";
import { authReducer } from "./user";
const store = configureStore({
  reducer: {
    chapters: chapterReducer,
    auth: authReducer,
  },
});

export default store;
