import { createSlice } from '@reduxjs/toolkit';

const initial_state = {
  user:
    localStorage.getItem('user') != undefined
      ? JSON.parse(localStorage.getItem('user'))
      : null,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initial_state,
  reducers: {
    loginStart: (state) => {
      state.user = null;
      state.error = null;
      state.isLoggedIn = false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    registerSuccess: (state) => {
      state.user = null;
      state.error = null;
      state.isLoggedIn = false;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.isLoggedIn = false;
      localStorage.removeItem('user');
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
