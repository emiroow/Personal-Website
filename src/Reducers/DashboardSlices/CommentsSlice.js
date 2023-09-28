import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteAdminDeleteComment, EditAdminComment, SetAdminAddComment, getAdminComments, } from "../../Service";

const initialState = {
    comments: [],
    status: "idel"
}

export const fetchgetAdminComments = createAsyncThunk("/Comments/fetchgetAdminComments", async () => {
    const response = await getAdminComments()
    return { status: response.status, data: response.data }
})

export const fetchSetAdminAddComment = createAsyncThunk("/Comments/fetchSetAdminAddComment", async (data) => {
    const response = await SetAdminAddComment(data)
    return { status: response.status, data: response.data }
})

export const fetchDeleteAdminDeleteComment = createAsyncThunk("/Comments/fetchDeleteAdminDeleteComment", async (id) => {
    const response = await DeleteAdminDeleteComment(id)
    return { status: response.status, data: response.data, id: id }
})
export const fetchEditAdminComment = createAsyncThunk("/Comments/fetchEditAdminComment", async (data) => {
    const response = await EditAdminComment(data)
    return { status: response.status, data: response.data }
})

const CommentsSlice = createSlice({
    name: "Comments",
    initialState,
    extraReducers: (builder) => {
        builder
            // fetchgetAdminComments
            .addCase(fetchgetAdminComments.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchgetAdminComments.fulfilled, (state, action) => {
                state.comments = action.payload.data
                state.status = "completed"
            })

            // fetchSetAdminAddComment
            .addCase(fetchSetAdminAddComment.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminAddComment.fulfilled, (state, action) => {
                state.comments.push(action.payload.data)
                state.status = "completed"
            })

            // fetchDeleteAdminDeleteComment
            .addCase(fetchDeleteAdminDeleteComment.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchDeleteAdminDeleteComment.fulfilled, (state, action) => {
                let filtered = state.comments.filter((item) => item.id !== action.payload.id)
                state.comments = filtered
                state.status = "completed"
            })

            // fetchEditAdminComment
            .addCase(fetchEditAdminComment.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchEditAdminComment.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    const findedIndex = state.comments.findIndex((item) => item.id === action.payload.data.id)
                    state.comments[findedIndex] = action.payload.data
                }
                state.status = "completed"
            })

    }
})

export default CommentsSlice.reducer