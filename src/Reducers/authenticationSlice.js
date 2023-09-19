import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthLogin } from "../Service"
import { toast } from 'react-toastify';

const initialState = {
    isToken: !!localStorage.getItem("PrjTk"),
    token: "",
    status: "",
    loader: false,
}

export const fetchAuthLogin = createAsyncThunk("/authentication/fetchAuthLogin", async (data) => {
    const response = await AuthLogin(data)
    return response.data
})

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        logOutUser: (state, _) => {
            localStorage.removeItem("PrjTk");
            state.isToken = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthLogin.pending, (state, action) => {
                state.loader = true
            })
            .addCase(fetchAuthLogin.fulfilled, (state, action) => {
                if (action.payload.token) {
                    localStorage.setItem("PrjTk", action.payload.token)
                    state.token = action.payload.token
                    state.isToken = true
                }
                state.loader = false
            })
            .addCase(fetchAuthLogin.rejected, (state, action) => {
                state.loader = false
            })
    }
})

export const { logOutUser } = authenticationSlice.actions

export default authenticationSlice.reducer