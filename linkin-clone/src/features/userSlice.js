import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: false,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
    },
    logout: state => {
      state.username = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.username;

export default userSlice.reducer;
