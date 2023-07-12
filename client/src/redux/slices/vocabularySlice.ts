import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllVocabulary = createAsyncThunk(
  "vocabulary/getAllVocabulary",
  async (lessonNumber) => {
    try {
      const response = await axios.get(
        `http://localhost:5500/course/vocabulary/${lessonNumber}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  vocabulary: [],
  isLoading: false,
  error: null,
};

const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVocabulary.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.vocabulary = [];
      })
      .addCase(getAllVocabulary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload) {
          state.vocabulary = action.payload;
        } else {
          state.vocabulary = [];
        }
      })
      .addCase(getAllVocabulary.rejected, (state, action) => {
        state.error = action.error.message;
        state.vocabulary = [];
      });
  },
});
export default vocabularySlice.reducer;
