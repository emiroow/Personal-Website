import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../Reducers/clientSlice"
import contactReduser from "../Reducers/contactSlice"
import settingReduser from "../Reducers/settingSlice"
export const store = configureStore({
    reducer: {
        client: clientReducer,
        setting: settingReduser,
        contact: contactReduser,
    },
});