import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/api";

// Create an async thunk to fetch user data
export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (params) => {
    try {
      const { data } = await axios.post("/auth/login", params);
      return data;
    } catch (error) {
      console.log(error.message || "can't login");
      throw error;
    }
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    try {
      const { data } = await axios.post("/auth/register", params);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message || "can't register");
      throw error;
    }
  }
);

const initialState = {
  data: null,
  status: "loading",
  token: localStorage.getItem("token") || null, // Initialize token with the value from local storage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.data = null;
      window.localStorage.removeItem("token"); // Remove token from localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        if (state.data && "token" in state.data) {
          window.localStorage.setItem("token", state.data.token);
        }
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectAuthStatus = (state) => Boolean(state.auth.data);
export const selectAuthData = (state) => state.auth.data;

export const { clearUserData } = authSlice.actions;

export const authReducer = authSlice.reducer;
