import { createSlice } from '@reduxjs/toolkit';
import { signup,signin } from '../actions/authAction';

const user = JSON.parse(localStorage.getItem("auth"));

const initialState = {
    loading: false,
    auth: user?.data?.token ? true : false,
    profile: user?.data?.token ? user?.data?.user : null,
    token: user?.data?.token ? user?.data?.token : "",
    error: null
};

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signup.pending]: (state) => {
            state.loading = true;
        },
        [signup.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload.message;
        },
        [signup.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.auth = true;
            state.token = payload.data.token;
            state.profile = payload.data.user;
        },
        [signin.pending]: (state) => {
            state.loading = true;
        },
        [signin.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload.message;
        },
        [signin.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.auth = true;
            state.token = payload.data.token;
            state.profile = payload.data.user;
        }
    }
})

export default authReducer.reducer;