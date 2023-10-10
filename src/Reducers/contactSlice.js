import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AddContactMessage, GetIp } from "../Service"
import { BinerConvert } from "../Helpers/LangConvertToBiner";

const initialState = {
    status: "idle",
    loader: false,
    error: null
}

export const fetchContactMessage = createAsyncThunk("/contact/fetchContactMessage", async (data) => {
    const { data: ip } = await GetIp()
    let ipMerging = { ...data, "ip": ip?.ip }
    let BinerLangMerge = { ...ipMerging, "lang": BinerConvert() }
    const response = await AddContactMessage({ ...data, ...BinerLangMerge })
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