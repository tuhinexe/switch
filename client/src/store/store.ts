import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const authSelector = (state: RootState) => state.auth;
export default store;

