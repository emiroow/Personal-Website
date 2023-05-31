import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteAdminCatagory, DeleteAdminPortfolio, EditAdminPortfolio, SetAdminPortfolio, SetAdminPortfoliosCatagories, getAdminPortfolios, getAdminPortfoliosCatagories } from "../../Service";

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
    return { data: response.data, status: response.status, id: id }
})

export const fetchEditAdminPortfolio = createAsyncThunk('/portfolio/fetchEditAdminPortfolio', async (data) => {
    const response = await EditAdminPortfolio(data)
    return { data: data, status: response.status }
})

export const fetchDeleteAdminPortfolio = createAsyncThunk('/portfolio/fetchDeleteAdminPortfolio', async (id) => {
    const response = await DeleteAdminPortfolio(id)
    return { data: response.data, status: response.status, id: id }
})

export const fetchSetAdminPortfolio = createAsyncThunk('/portfolio/fetchSetAdminPortfolio', async (data) => {
    const response = await SetAdminPortfolio(data)
    return { data: data, status: response.status }
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
                if (action.payload.status === 200) {
                    let filteredCatagory = state.portfoliosCatagories.filter((item) => item.catagoryId !== action.payload.id)
                    state.portfoliosCatagories = filteredCatagory
                }
                state.status = "completed"
            })

            // fetchEditAdminPortfolio
            .addCase(fetchEditAdminPortfolio.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchEditAdminPortfolio.fulfilled, (state, action) => {
                state.status = "completed"
                if (action.payload.status === 200) {
                    const findedIndex = state.portfolios.findIndex((item) => item.portfolioId === action.payload.data.portfolioId)
                    state.portfolios[findedIndex] = action.payload.data
                }
                state.status = "completed"
            })

            // fetchDeleteAdminPortfolio
            .addCase(fetchDeleteAdminPortfolio.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchDeleteAdminPortfolio.fulfilled, (state, action) => {
                state.portfolios = state.portfolios.filter((item) => item.portfolioId !== action.payload.id)
                state.status = "completed"
            })

            // fetchSetAdminPortfolio
            .addCase(fetchSetAdminPortfolio.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchSetAdminPortfolio.fulfilled, (state, action) => {
                state.portfolios.push(action.payload.data)
                state.status = "completed"
            })
    }
})

export default PortfolioSlice.reducer