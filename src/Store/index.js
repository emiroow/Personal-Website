import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../Reducers/clientSlice"
export const store = configureStore({
    reducer: {
        client: clientReducer
    },
});