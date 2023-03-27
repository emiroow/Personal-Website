import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteAdminEducation, EditAdminEducation, GetAdminEducations, SetAdminEducation } from "../../Service";

const initialState = {
    allEducations: [],
    status: "idle",
    error: null,
};

export const fetchGetAdminEducations = createAsyncThunk("/educations/fetchGetAdminEducations", async () => {
    const response = await GetAdminEducations()
    return { status: response.status, data: response.data }
})

export const fetchSetAdminEducation = createAsyncThunk("/educations/fetchSetAdminEducation", async (data) => {
    const response = await SetAdminEducation(data)
    return { status: response.status, data: response.data }
})

export const fetchDeleteAdminEducation = createAsyncThunk("/educations/fetchDeleteAdminEducation", async (id) => {
    const response = await DeleteAdminEducation(id)
    return { status: response.status, id: id }
})

export const fetchEditAdminEducation = createAsyncThunk("/educations/fetchEditAdminEducation", async (data) => {
    const response = await EditAdminEducation(data)
    return { status: response.status, data: data }
})

const EducationsSlice = createSlice({
    name: "educations",
    initialState,
    extraReducers: (builder) => {
        builder
            // fetchGetAdminEducations
            .addCase(fetchGetAdminEducations.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchGetAdminEducations.fulfilled, (state, action) => {
                state.allEducations = action.payload.data
                state.status = "completed"
            })
            .addCase(fetchGetAdminEducations.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.payload
            })
            // fetchSetAdminEducation
            .addCase(fetchSetAdminEducation.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminEducation.fulfilled, (state, action) => {
                state.allEducations.push(action.payload.data)
                state.status = "completed"
            })
            // fetchDeleteAdminEducation
            .addCase(fetchDeleteAdminEducation.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchDeleteAdminEducation.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    state.allEducations = state.allEducations.filter((item) => item.id !== action.payload.id)
                }
                state.status = "completed"
            })
            // fetchEditAdminEducation
            .addCase(fetchEditAdminEducation.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchEditAdminEducation.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    const findedIndex = state.allEducations.findIndex((item) => item.id === action.payload.data.id)
                    state.allEducations[findedIndex] = action.payload.data
                }
                state.status = "completed"
                console.log(action.payload)
            })
    },
});

export default EducationsSlice.reducer;