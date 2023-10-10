import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetPerspnalData } from "../Service"

const initialState = {
    clientState: [],
    status: "idle",
    error: null
}

export const fetchClientData = createAsyncThunk("/client/fetchClientData", async (Language) => {
    const response = await GetPerspnalData(Language)
    return response.data
})

const clientSlice = createSlice({
    name: "client",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchClientData.pending, (state, _) => {
                state.status = "Loading";
            })
            .addCase(fetchClientData.fulfilled, (state, action) => {
                state.status = "conmpleted";
                state.clientState = action.payload
            })
            .addCase(fetchClientData.rejected, (state, _) => {
                state.status = "failed";
            })
    }
})

export default clientSlice.reducer