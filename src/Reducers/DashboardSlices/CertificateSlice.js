import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteAdminCertificate, EditAdminCertificate, SetAdminAddCertificate, getAdminCertificate } from "../../Service";

const initialState = {
    certificates: [],
    status: "idel"
}

export const fetchgetAdminCertificate = createAsyncThunk("/certificate/fetchgetAdminCertificate", async () => {
    const response = await getAdminCertificate()
    return { status: response.status, data: response.data }
})

export const fetchSetAdminAddCertificate = createAsyncThunk("/certificate/fetchSetAdminAddCertificate", async (data) => {
    const response = await SetAdminAddCertificate(data)
    return { status: response.status, data: response.data }
})

export const fetchDeleteAdminCertificate = createAsyncThunk("/certificate/fetchDeleteAdminCertificate", async (id) => {
    const response = await DeleteAdminCertificate(id)
    return { status: response.status, data: response.data, id: id }
})

export const fetchEditAdminCertificate = createAsyncThunk("/certificate/fetchEditAdminCertificate", async (data) => {
    const response = await EditAdminCertificate(data)
    return { status: response.status, data: response.data }
})

const CommentsSlice = createSlice({
    name: "certificate",
    initialState,
    extraReducers: (builder) => {
        builder
            // fetchgetAdminCertificate
            .addCase(fetchgetAdminCertificate.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchgetAdminCertificate.fulfilled, (state, action) => {
                state.certificates = action.payload.data
                state.status = "completed"
            })

            // fetchSetAdminAddCertificate
            .addCase(fetchSetAdminAddCertificate.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminAddCertificate.fulfilled, (state, action) => {
                state.certificates.push(action.payload.data)
                state.status = "completed"
            })

            // fetchDeleteAdminCertificate
            .addCase(fetchDeleteAdminCertificate.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchDeleteAdminCertificate.fulfilled, (state, action) => {
                let filtered = state.certificates.filter((item) => item.id !== action.payload.id)
                state.certificates = filtered
                state.status = "completed"
            })

            // fetchEditAdminCertificate
            .addCase(fetchEditAdminCertificate.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchEditAdminCertificate.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    const findedIndex = state.certificates.findIndex((item) => item.id === action.payload.data.id)
                    state.certificates[findedIndex] = action.payload.data
                }
                state.status = "completed"
            })

    }
})

export default CommentsSlice.reducer