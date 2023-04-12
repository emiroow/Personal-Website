import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthLogin } from "../Service"
import { toast } from 'react-toastify';

const initialState = {
    isToken: !!localStorage.getItem("Token"),
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
            localStorage.removeItem("Token");
            state.isToken = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthLogin.pending, (state, action) => {
                state.loader = true
            })
            .addCase(fetchAuthLogin.fulfilled, (state, action) => {
                if (action.payload.status === 401) {
                    state.status = action.payload.status
                    toast.warning("cheack User & Password", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else if (action.payload.token) {
                    localStorage.setItem("Token", action.payload.token)
                    state.token = action.payload.token
                    state.isToken = true
                } else {
                    toast.warning((action.payload.title), {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                state.loader = false
            })
            .addCase(fetchAuthLogin.rejected, (state, action) => {
                state.loader = false
                toast.warning("cheack User & Password", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }
})

export const { logOutUser } = authenticationSlice.actions

export default authenticationSlice.reducer