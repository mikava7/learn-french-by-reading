import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, refresh } from "../api/authApi";
const BASE_URL = "http://localhost:5500";
const initialState = {
  isLoading: false,
  isSuccess: false,
  accessToken: localStorage.getItem("accessToken") || null, // Get the access token from local storage
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.error = null;
      state.isAuthenticated = true;
      localStorage.setItem("accessToken", action.payload.accessToken); // Store the access token in local storage
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.accessToken = null;
      state.user = null;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.error = null;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.accessToken = null;
      state.user = null;
      state.error = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken"); // Remove the access token from local storage
    },
    refreshStart: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.error = null;
    },
    refreshSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.accessToken = action.payload.accessToken;
      state.error = null;
    },
    refreshFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.accessToken = null;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  refreshStart,
  refreshSuccess,
  refreshFailure,
} = authSlice.actions;

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const data = await login(userData);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(registerStart());
    await register(userData);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

export const refreshToken = () => async (dispatch) => {
  try {
    dispatch(refreshStart());
    const data = await fetch("http://localhost:5500/auth/refresh", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Include cookies in the request
    }).then((response) => response.json());
    dispatch(refreshSuccess(data));
  } catch (error) {
    dispatch(refreshFailure(error.message));
  }
};

export default authSlice.reducer;
