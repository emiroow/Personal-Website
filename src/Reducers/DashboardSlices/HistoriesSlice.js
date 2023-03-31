import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteAdminHistory, EditAdminHistory, GetAdminHistories, SetAdminHistories } from "../../Service";

export const fetchGetHistoriesData = createAsyncThunk("/histories/fetchGetHistoriesData", async () => {
    const response = await GetAdminHistories()
    return { data: response.data, status: response.status }
})

export const fetchSetAdminHistories = createAsyncThunk("/histories/SetAdminHistories", async (data) => {
    const response = await SetAdminHistories(data)
    return { data: response.data, status: response.status }
})

export const fetchDeleteAdminHistory = createAsyncThunk("/histories/fetchDeleteAdminHistory", async (id) => {
    const response = await DeleteAdminHistory(id)
    return { status: response.status, id: id }
})

export const fetchEditAdminHistory = createAsyncThunk("/histories/fetchEditAdminHistory", async (data) => {
    const response = await EditAdminHistory(data)
    return { status: response.status, data: data }
})

const initialState = {
    allHistories: [],
    status: "idel",
}

const historiesSlice = createSlice({
    name: "histories",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetHistoriesData.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchGetHistoriesData.fulfilled, (state, action) => {
                const data = action.payload.data
                const status = action.payload.status
                if (status === 200) {
                    state.allHistories = data
                }
                state.status = "completed"
            })
            // fetchSetAdminHistories
            .addCase(fetchSetAdminHistories.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminHistories.fulfilled, (state, action) => {
                state.allHistories.push(action.payload.data)
                state.status = "completed"
            })
            // fetchDeleteAdminHistory
            .addCase(fetchDeleteAdminHistory.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchDeleteAdminHistory.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    state.allHistories = state.allHistories.filter((item) => item.id !== action.payload.id)
                }
                state.status = "completed"
            })
            // fetchEditAdminHistory
            .addCase(fetchEditAdminHistory.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchEditAdminHistory.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    const findedIndex = state.allHistories.findIndex((item) => item.id === action.payload.data.id)
                    state.allHistories[findedIndex] = action.payload.data
                }
                state.status = "completed"
            })
    }
})

export default historiesSlice.reducer;
