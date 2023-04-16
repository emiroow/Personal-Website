import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteAdminService, EditAdminService, GetAdminService, SetAdminService } from "../../Service";

const initialState = {
    allServices: [],
    status: "idel"
}

export const fetchGetAdminServices = createAsyncThunk("/services/fetchGetAdminServices", async () => {
    const response = await GetAdminService()
    return { data: response.data, status: response.status }
})

export const fetchSetAdminService = createAsyncThunk("/services/fetchSetAdminService", async (data) => {
    const response = await SetAdminService(data)
    return { data: response.data, status: response.status }
})

export const fetchDeleteAdminService = createAsyncThunk("/services/fetchDeleteAdminService", async (id) => {
    const response = await DeleteAdminService(id)
    return { data: response.data, status: response.status, id: id }
})

export const fetchEditAdminService = createAsyncThunk('/services/fetchEditAdminService', async (data) => {
    const response = await EditAdminService(data)
    return { data: response.data, status: response.status }
})

const serviceSlice = createSlice({
    name: "services",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetAdminServices.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchGetAdminServices.fulfilled, (state, action) => {
                state.status = "completed"
                if (action.payload.status === 200) {
                    state.allServices = action.payload.data
                }
            })
            // fetchSetAdminService
            .addCase(fetchSetAdminService.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminService.fulfilled, (state, action) => {
                state.status = "completed"
                state.allServices.push(action.payload.data)
            })
            .addCase(fetchSetAdminService.rejected, (state, action) => {
                state.status = "idel"
            })
            // fetchDeleteAdminService
            .addCase(fetchDeleteAdminService.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchDeleteAdminService.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    state.allServices = state.allServices.filter((item) => item.id !== action.payload.id)
                }
                state.status = "completed"
            })
            .addCase(fetchDeleteAdminService.rejected, (state, action) => {
                state.status = "idel"
            })

            // fetchEditAdminService
            .addCase(fetchEditAdminService.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchEditAdminService.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    const findedIndex = state.allServices.findIndex((item) => item.id === action.payload.data.id)
                    state.allServices[findedIndex] = action.payload.data
                }
                state.status = "completed"
            })
            .addCase(fetchEditAdminService.rejected, (state, action) => {
                state.status = "idel"
            })
    }
})

export default serviceSlice.reducer