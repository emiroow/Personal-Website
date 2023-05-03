import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteAdminSkill, SetAdminCircleSkill, SetAdminSkill, getAdminCircleSkills, getAdminSkills } from "../../Service";
import { DeleteAdminCircleSkill } from "../../Service";

export const fetchGetAdminSkills = createAsyncThunk("/Skills/fetchGetAdminSkills", async () => {
    const response = await getAdminSkills()
    return { data: response.data, status: response.status }
})

export const fetchGetAdminCircleSkills = createAsyncThunk("/Skills/fetchGetAdminCircleSkills", async () => {
    const response = await getAdminCircleSkills()
    return { data: response.data, status: response.status }
})

export const fetchDeleteAdminCircleSkill = createAsyncThunk("/Skills/fetchDeleteAdminCircleSkill", async (id) => {
    const response = await DeleteAdminCircleSkill(id)
    return { data: response.data, status: response.status, id: id }
})

export const fetchDeleteAdminSkill = createAsyncThunk("/Skills/fetchDeleteAdminSkill", async (id) => {
    const response = await DeleteAdminSkill(id)
    return { data: response.data, status: response.status, id: id }
})

export const fetchSetAdminSkill = createAsyncThunk("/Skills/fetchSetAdminSkill", async (data) => {
    const response = await SetAdminSkill(data)
    return { data: response.data, status: response.status }
})

export const fetchSetAdminCircleSkill = createAsyncThunk("/Skills/fetchSetAdminCircleSkill", async (data) => {
    const response = await SetAdminCircleSkill(data)
    return { data: response.data, status: response.status, id: data.id }
})

const initialState = {
    LineSkills: [],
    NoneSkills: [],
    CircleSkills: [],
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
                let noneProgres = action.payload.data.filter((item) => item.progressBar === false)
                let lineProgres = action.payload.data.filter((item) => item.progressBar === true)
                state.NoneSkills = noneProgres
                state.LineSkills = lineProgres
                state.status = "completed"
            })

            .addCase(fetchGetAdminCircleSkills.pending, (state, _) => {
                state.status = "pending"
            })
            .addCase(fetchGetAdminCircleSkills.fulfilled, (state, action) => {
                state.CircleSkills = action.payload.data
                state.status = "completed"
            })

            .addCase(fetchDeleteAdminCircleSkill.pending, (state, _) => {
                state.status = "pending"
            })
            .addCase(fetchDeleteAdminCircleSkill.fulfilled, (state, action) => {
                let filteredDelete = state.CircleSkills.filter((item) => item.id !== action.payload.id)
                console.log(filteredDelete)
                state.CircleSkills = filteredDelete
                state.status = "completed"
            })

            .addCase(fetchDeleteAdminSkill.pending, (state, _) => {
                state.status = "pending"
            })
            .addCase(fetchDeleteAdminSkill.fulfilled, (state, action) => {
                let filteredDeleteLineSkills = state.LineSkills.filter((item) => item.id !== action.payload.id)
                let filteredDeleteNoneSkills = state.NoneSkills.filter((item) => item.id !== action.payload.id)
                state.LineSkills = filteredDeleteLineSkills
                state.NoneSkills = filteredDeleteNoneSkills
                state.status = "completed"
            })

            .addCase(fetchSetAdminSkill.pending, (state, _) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminSkill.fulfilled, (state, action) => {
                console.log(action.payload.data)
                state.status = "completed"
            })

            .addCase(fetchSetAdminCircleSkill.pending, (state, _) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminCircleSkill.fulfilled, (state, action) => {
                console.log(action.payload.data)

                state.status = "completed"
            })
    }
})

export default SkillsSlice.reducer