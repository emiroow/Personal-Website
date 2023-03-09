import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { GetSetting } from "../Service"

const initialState = {
    setting: {},
    status: "idle",
    loader: false,
    error: null
}

export const fetchGetSetting = createAsyncThunk("/setting/fetchGetSetting", async (Language) => {
    const response = await GetSetting(Language)
    return response.data
})

const settingSlice = createSlice({
    name: "setting",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetSetting.pending, (state, action) => {
                state.loader = true;
            })
            .addCase(fetchGetSetting.fulfilled, (state, action) => {
                state.loader = false;
                state.status = "done";
                state.setting = action.payload
            })
            .addCase(fetchGetSetting.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload
            })
    }
})

export default settingSlice.reducer