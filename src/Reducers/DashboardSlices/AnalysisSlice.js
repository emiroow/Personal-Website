import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { GetAdminAnalysis, SetAdminAnalysis, DeleteAdminAnalysis, EditAdminAnalysis } from "../../Service";


const initialState = {
    allAnalysis: [],
    status: "idle",
    error: null,
};

export const fetchAdminAnalysis = createAsyncThunk("/analysis/fetchAdminAnalysis", async () => {
    const response = await GetAdminAnalysis()
    return response.data
})

export const fetchAddAdminAnalysis = createAsyncThunk("/analysis/fetchAddAdminAnalysis", async (data) => {
    const response = await SetAdminAnalysis(data)
    return { status: response.status, data: response.data }
})

export const fetchDeletAdminAnalysis = createAsyncThunk("/analysis/fetchDeletAdminAnalysis", async (ID) => {
    const response = await DeleteAdminAnalysis(ID)
    return { status: response.status, data: response.data, id: ID }
})

export const fetchUpdateAdminAnalysis = createAsyncThunk("/analysis/fetchUpdateAdminAnalysis", async (data) => {
    const response = await EditAdminAnalysis(data)
    return { status: response.status, data: data }
})

const analysisSlice = createSlice({
    name: "analysis",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // fetchAdminAnalysis
            .addCase(fetchAdminAnalysis.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchAdminAnalysis.fulfilled, (state, action) => {
                state.allAnalysis = action.payload
                state.status = "conmpleted"
            })
            // fetchAddAdminAnalysis
            .addCase(fetchAddAdminAnalysis.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchAddAdminAnalysis.fulfilled, (state, action) => {
                state.status = "conmpleted"
                console.log(action.payload)
                if (action.payload.status === 200) {
                    state.allAnalysis.push(action.payload.data)
                }
            })
            // fetchDeletAdminAnalysis
            .addCase(fetchDeletAdminAnalysis.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchDeletAdminAnalysis.fulfilled, (state, action) => {
                state.status = "conmpleted"
                if (action.payload.status === 200) {
                    state.allAnalysis = state.allAnalysis.filter((item) => item.id !== action.payload.id)
                }
            })
            // fetchUpdateAdminAnalysis
            .addCase(fetchUpdateAdminAnalysis.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchUpdateAdminAnalysis.fulfilled, (state, action) => {
                console.log(action.payload)
                state.status = "conmpleted"
                if (action.payload.status === 200) {
                    const findedIndex = state.allAnalysis.findIndex((item) => item.id === action.payload.data.id)
                    console.log(findedIndex)
                    console.log(action.payload.data)
                    state.allAnalysis[findedIndex] = action.payload.data
                }
            })

    },
});


export default analysisSlice.reducer;
