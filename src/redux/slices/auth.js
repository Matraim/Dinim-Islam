import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoggedIn: false,
};
const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {},
});

export const selectorAuth = (state) => state.auth;
export const actionsAuth = auth.actions;
export default auth.reducer;
