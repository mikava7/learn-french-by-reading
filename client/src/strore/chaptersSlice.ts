import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { fetchBooksData } from "../api/api";

export const fetchChaptersData = createAsyncThunk(
  "chapters/fetchChaptersData",
  async () => {
    try {
      const response = await axios.get("http://localhost:5500/books");
      return response.data;
      console.log("data", data);
    } catch (error) {
      throw new Error(`Error fetching books data: ${error.message}`);
    }
  }
);

const chaptersSlice = createSlice({
  name: "chapters",
  initialState: {
    chapters: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Define your reducer functions here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChaptersData.pending, (state) => {
        state.chapters = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChaptersData.fulfilled, (state, action) => {
        // state.chapters = action.payload;
        state.loading = false;
        state.chapters = action.payload;
      })
      .addCase(fetchChaptersData.rejected, (state, action) => {
        state.chapters = [];
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const chapterReducer = chaptersSlice.reducer;
