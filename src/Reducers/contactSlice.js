import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { AddContactMessage } from "../Service"

const initialState = {
    status: "idle",
    loader: false,
    error: null
}

export const fetchContactMessage = createAsyncThunk("/contact/fetchContactMessage", async (Language) => {
    const response = await AddContactMessage(Language)
    return response.data
})


const ContactMessageSlice = createSlice({
    name: "contact",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactMessage.pending, (state, action) => {
                state.loader = true;
            })
            .addCase(fetchContactMessage.fulfilled, (state, action) => {
                state.loader = false;
                state.status = "done";
            })
            .addCase(fetchContactMessage.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload
            })
    }
})

export default ContactMessageSlice.reducer