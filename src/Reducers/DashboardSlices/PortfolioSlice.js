import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteAdminCatagory, SetAdminPortfoliosCatagories, getAdminPortfolios, getAdminPortfoliosCatagories } from "../../Service";

export const fetchgetAdminPortfolios = createAsyncThunk('/portfolio/fetchgetAdminPortfolios', async () => {
    const response = await getAdminPortfolios()
    return { data: response.data, status: response.status }
})

export const fetchgetAdminPortfoliosCatagories = createAsyncThunk('/portfolio/fetchgetAdminPortfoliosCatagories', async () => {
    const response = await getAdminPortfoliosCatagories()
    return { data: response.data, status: response.status }
})

export const fetchSetAdminPortfoliosCatagories = createAsyncThunk('/portfolio/fetchSetAdminPortfoliosCatagories', async (data) => {
    const response = await SetAdminPortfoliosCatagories(data)
    return { data: response.data, status: response.status }
})

export const fetchDeleteAdminCatagory = createAsyncThunk('/portfolio/fetchDeleteAdminCatagory', async (id) => {
    const response = await DeleteAdminCatagory(id)
    console.log(response)
    return { data: response.data, status: response.status, id: id }
})

const initialState = {
    portfolios: [],
    portfoliosCatagories: [],
    status: "idel"
}

const PortfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    extraReducers: (builder) => {
        builder
            // fetchgetAdminPortfolios
            .addCase(fetchgetAdminPortfolios.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchgetAdminPortfolios.fulfilled, (state, action) => {
                state.status = "completed"
                state.portfolios = action.payload.data
            })

            // fetchgetAdminPortfoliosCatagories 
            .addCase(fetchgetAdminPortfoliosCatagories.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchgetAdminPortfoliosCatagories.fulfilled, (state, action) => {
                state.status = "completed"
                state.portfoliosCatagories = action.payload.data
            })

            // fetchSetAdminPortfoliosCatagories
            .addCase(fetchSetAdminPortfoliosCatagories.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminPortfoliosCatagories.fulfilled, (state, action) => {
                state.status = "completed"
                state.portfoliosCatagories.push(action.payload.data)
            })

            // fetchDeleteAdminCatagory
            .addCase(fetchDeleteAdminCatagory.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchDeleteAdminCatagory.fulfilled, (state, action) => {
                state.status = "completed"
                let filteredCatagory = state.portfoliosCatagories.filter((item) => item.catagoryId !== action.payload.id)
                state.portfoliosCatagories = filteredCatagory
            })
    }
})

export default PortfolioSlice.reducer