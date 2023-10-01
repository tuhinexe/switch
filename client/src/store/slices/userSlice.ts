import { createSlice } from '@reduxjs/toolkit';
import fetchUser from '@/utils/fetchUser';
import { login, signup } from '../features/authAction';

const initialState = {
  user: fetchUser(),
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem('switchUser', JSON.stringify(action.payload));
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    //   @ts-ignore
      state.error = action.payload;
    });
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem('switchUser', JSON.stringify(action.payload));
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
    //   @ts-ignore
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
