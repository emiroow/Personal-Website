import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SetAdminAddComment, getAdminComments, } from "../../Service";

const initialState = {
    comments: [],
    status: "idel"
}

export const fetchgetAdminComments = createAsyncThunk("/Comments/fetchgetAdminComments", async () => {
    const response = await getAdminComments()
    return { status: response.status, data: response.data }
})

export const fetchSetAdminAddComment = createAsyncThunk("/Comments/fetchSetAdminAddComment", async () => {
    const response = await SetAdminAddComment()
    return { status: response.status, data: response.data }
})

const CommentsSlice = createSlice({
    name: "Comments",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchgetAdminComments.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchgetAdminComments.fulfilled, (state, action) => {
                state.comments = action.payload.data
                state.status = "completed"
            })

            .addCase(fetchSetAdminAddComment.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminAddComment.fulfilled, (state, action) => {
                state.comments.push(action.payload.data)
                state.status = "completed"
            })
    }
})

export default CommentsSlice.reducer