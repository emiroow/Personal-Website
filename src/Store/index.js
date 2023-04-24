import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../Reducers/clientSlice"
import contactReduser from "../Reducers/contactSlice"
import settingReduser from "../Reducers/settingSlice"
import authenticationReduser from "../Reducers/authenticationSlice"
import GeneralReduser from "../Reducers/DashboardSlices/GeneralSlice";
import AnalysisReduser from "../Reducers/DashboardSlices/AnalysisSlice";
import EducationsReduser from "../Reducers/DashboardSlices/EducationsSlice"
import historiesReduser from "../Reducers/DashboardSlices/HistoriesSlice"
import servicesRedusers from "../Reducers/DashboardSlices/ServiceSlice"
import socialsRedusers from "../Reducers/DashboardSlices/SocialsSlice"
export const store = configureStore({
    reducer: {
        client: clientReducer,
        setting: settingReduser,
        contact: contactReduser,
        authentication: authenticationReduser,
        // Dashboard
        general: GeneralReduser,
        analysis: AnalysisReduser,
        educations: EducationsReduser,
        histories: historiesReduser ,
        services : servicesRedusers ,
        socials : socialsRedusers ,
    },
});