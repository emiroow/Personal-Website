import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthLogin } from "../Service";

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
                if (action.payload.success) {
                    localStorage.setItem("PrjTk", action.payload.data.token)
                    state.token = action.payload.data.token
                    state.isToken = true
                }
                state.loader = false
            })
    }
})

export const { logOutUser } = authenticationSlice.actions

export default authenticationSlice.reducer