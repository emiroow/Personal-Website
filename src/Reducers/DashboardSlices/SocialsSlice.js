import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SetAdminSocials, getAdminSocials } from "../../Service";

const initialState = {
    socials: [],
    status: "idle"
}

export const fetchGetAdminSocials = createAsyncThunk('/socials/fetchGetAdminSocials', async () => {
    const response = await getAdminSocials()
    return { data: response.data, status: response.status }
})

export const fetchSetAdminSocials = createAsyncThunk("/socials/fetchSetAdminSocials", async (data) => {
    const response = await SetAdminSocials(data)
    return { data: response.data, status: response.status }
})

const socialsSlice = createSlice({
    name: "socials",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetAdminSocials.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchGetAdminSocials.fulfilled, (state, action) => {
                console.log(action.payload)
                state.socials = action.payload.data
                state.status = "completed"
            })
            .addCase(fetchSetAdminSocials.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminSocials.fulfilled, (state, action) => {
                console.log(action.payload)
                state.status = "completed"
            })
    }
})

export default socialsSlice.reducer