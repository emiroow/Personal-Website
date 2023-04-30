import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAdminSkills } from "../../Service";

export const fetchGetAdminSkills = createAsyncThunk("/Skills/fetchGetAdminSkills", async () => {
    const response = await getAdminSkills()
    return { data: response.data, status: response.status }
})

const initialState = {
    Skills: [],
    status: "idel"
}

const SkillsSlice = createSlice({
    name: "Skills",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetAdminSkills.pending, (state, _) => {
                state.status = "pending"
            })
            .addCase(fetchGetAdminSkills.fulfilled, (state, action) => {
                state.Skills = action.payload.data
                state.status = "completed"
            })
    }
})

export default SkillsSlice.reducer