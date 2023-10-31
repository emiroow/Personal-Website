import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAdminUploads } from "../../Service";

export const fetchGetUploads = createAsyncThunk("/uploads/fetchGetUploads", async (data) => {
    const response = await getAdminUploads()
    return { data: response.data, status: response.status }
})
const UploadsSlice = createSlice({
    name : "uploads" ,
    initialState : {
        uploadFiles : [],
        loader : false
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchGetUploads.pending , (state , action )=>{
            state.loader = true
        })
        builder.addCase(fetchGetUploads.fulfilled , (state , action )=>{
            console.log(action.payload)
            state.loader = false
        })
        builder.addCase(fetchGetUploads.rejected , (state , action )=>{
            state.loader = false
        })
    }
})

export default UploadsSlice.reducer