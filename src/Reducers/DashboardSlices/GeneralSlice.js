import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetAdminAbout, SetAbout } from "../../Service";

export const fetchGeneraltData = createAsyncThunk("/client/fetchGeneraltData", async (Language) => {
    const response = await GetAdminAbout(Language)
    return response.data
})

export const fetchSetGeneralData = createAsyncThunk("/client/fetchSetGeneraltData", async (data) => {
    const response = await SetAbout(data)
    return { status: response.status, data: response.data }
})

const initialState = {
    generalFa: [],
    generalEn: [],
    status: "idle",
    error: null
}

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        SetGeneraltDataFa: (state, action) => {
            state.generalFa = action.payload
        },
        SetGeneraltDataEn: (state, action) => {
            state.generalEn = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGeneraltData.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchGeneraltData.fulfilled, (state, action) => {
                state.status = "conmpleted";
                state.generalFa = action.payload[0];
                state.generalEn = action.payload[1];
            })
            .addCase(fetchGeneraltData.rejected, (state, action) => {
                state.status = "failed";
            })
            // Set General Data
            .addCase(fetchSetGeneralData.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchSetGeneralData.fulfilled, (state, action) => {
                state.status = "conmpleted";
            })
    },
});

export const { SetGeneraltDataFa, SetGeneraltDataEn } = generalSlice.actions;

export default generalSlice.reducer;
