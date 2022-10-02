import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/auth';

export const signup = createAsyncThunk("auth/signup",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await api.signup(userData);
            localStorage.setItem("auth",JSON.stringify(response.data));
            return response.data;

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const signin = createAsyncThunk("auth/login",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await api.login(userData);
            localStorage.setItem("auth",JSON.stringify(response.data));
            return response.data;

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

