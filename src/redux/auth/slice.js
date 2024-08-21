import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: 'user',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
