import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BinerConvert } from "../Helpers/LangConvertToBiner";
import { AddContactMessage, GetIp } from "../Service";

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
    return response.status
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
                if(action.payload === 200){
                state.status = "done";
                state.loader = false;
                }else {
                state.status = "failed";
                state.error = action.payload
                state.loader = false;
                }
            })
            .addCase(fetchContactMessage.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload
                state.loader = false;
            })
    }
})

export default ContactMessageSlice.reducer