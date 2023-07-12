import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDialoguesForLesson = createAsyncThunk(
  "dialogues/fetchDialoguesForLesson",
  async (lessonNumber) => {
    try {
      const response = await axios.get(
        `http://localhost:5500/course/dialogues/${lessonNumber}`
      );
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch dialogues for lesson");
    }
  }
);

const initialState = {
  dialogues: [],
  isLoading: false,
  error: null,
};

const dialogueSlice = createSlice({
  name: "dialogues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDialoguesForLesson.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDialoguesForLesson.fulfilled, (state, action) => {
        state.dialogues = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDialoguesForLesson.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default dialogueSlice.reducer;
