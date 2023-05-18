import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAdminContactUsMessages } from "../../Service";

const initialState = {
    Messages: [],
    status: "idel"
}

export const fetchgetAdminContactUsMessages = createAsyncThunk("/ContactUsMessages/fetchgetAdminContactUsMessages", async (Page) => {
    const response = await getAdminContactUsMessages(Page)
    return { status: response.status, data: response.data }
})

const ContactUsMessagesSlice = createSlice({
    name: "ContactUsMessages",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchgetAdminContactUsMessages.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchgetAdminContactUsMessages.fulfilled, (state, action) => {
                state.Messages = action.payload.data
                state.status = "completed"
            })
    }
})

export default ContactUsMessagesSlice.reducer