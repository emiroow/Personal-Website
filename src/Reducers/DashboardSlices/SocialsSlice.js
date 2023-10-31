import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DeleteAdminSocial, SetAdminSocials, getAdminSocials } from "../../Service";

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

export const fetchDeleteAdminSocial = createAsyncThunk("/socials/fetchDeleteAdminSocial", async (id) => {
    const response = await DeleteAdminSocial(id)
    return { data: response.data, status: response.status, id: id }
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
                state.socials = action.payload.data
                state.status = "completed"
            })
            .addCase(fetchSetAdminSocials.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminSocials.fulfilled, (state, action) => {
                state.socials.push(action.payload.data)
                state.status = "completed"
            })
            .addCase(fetchDeleteAdminSocial.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchDeleteAdminSocial.fulfilled, (state, action) => {
                let filteredBack = state.socials.filter((item) => item.id !== action.payload.id)
                state.socials = filteredBack
                state.status = "completed"
            })
    }
})

export default socialsSlice.reducer