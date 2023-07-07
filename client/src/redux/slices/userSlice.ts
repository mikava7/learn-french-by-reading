// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api/authApi";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const data = await loginUser(username, password);

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export default userSlice.reducer;
