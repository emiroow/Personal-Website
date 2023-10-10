import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetSetting, SetAdminSetting } from "../Service"

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
export const fetchSetAdminSetting = createAsyncThunk("/setting/fetchSetAdminSetting", async (data) => {
    const response = await SetAdminSetting(data)
    return { status: response.status, name: data.key, value: data.val }
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

            // fetchSetAdminSetting
            .addCase(fetchSetAdminSetting.pending, (state, action) => {
                state.loader = true;
            })
            .addCase(fetchSetAdminSetting.fulfilled, (state, action) => {
                state.loader = false;
                state.status = "done";
                const { name, value } = action.payload;
                state.setting = {
                    ...state.setting,
                    [name]: value,
                };
            })
    }
})

export default settingSlice.reducer