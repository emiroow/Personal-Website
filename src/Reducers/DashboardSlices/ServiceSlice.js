import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetAdminService } from "../../Service";

const initialState = {
    allServices: [],
    status: "idel"
}

export const fetchGetAdminServices = createAsyncThunk("/services/fetchGetAdminServices", async () => {
    const response = await GetAdminService()
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
                console.log(action.payload)
                state.status = "completed"
                if (action.payload.status === 200) {
                    state.allServices = action.payload.data
                }
            })
    }
})

export default serviceSlice.reducer