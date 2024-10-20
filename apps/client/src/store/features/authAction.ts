import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios";
import { User } from "@/types";



export const login = createAsyncThunk(
    "auth/login",
    async (data: { email: string; password: string }, {rejectWithValue}) => {
        try {
            const response = await axios.post("/users/signin", data);
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const signup = createAsyncThunk(
    "auth/signup",
    async (data:User, {rejectWithValue}) => {
        try {
            const response = await axios.post("/users/signup", data);
            return response.data;
        } catch (error:any) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);