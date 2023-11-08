import { configureStore } from "@reduxjs/toolkit";

import AnalysisReduser from "../Reducers/DashboardSlices/AnalysisSlice";
import CertificateRedusers from "../Reducers/DashboardSlices/CertificateSlice";
import CommentsRedusers from "../Reducers/DashboardSlices/CommentsSlice";
import ContactUsMessagesRedusers from "../Reducers/DashboardSlices/ContactUsMessagesSlice";
import EducationsReduser from "../Reducers/DashboardSlices/EducationsSlice";
import GeneralReduser from "../Reducers/DashboardSlices/GeneralSlice";
import historiesReduser from "../Reducers/DashboardSlices/HistoriesSlice";
import PortfolioRedusers from "../Reducers/DashboardSlices/PortfolioSlice";
import servicesRedusers from "../Reducers/DashboardSlices/ServiceSlice";
import skillsRedusers from "../Reducers/DashboardSlices/SkillsSlice";
import socialsRedusers from "../Reducers/DashboardSlices/SocialsSlice";
import UploadsReducers from "../Reducers/DashboardSlices/UploadsSlice";
import authenticationReduser from "../Reducers/authenticationSlice";
import clientReducer from "../Reducers/clientSlice";
import contactReduser from "../Reducers/contactSlice";
import settingReduser from "../Reducers/settingSlice";
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
    histories: historiesReduser,
    services: servicesRedusers,
    socials: socialsRedusers,
    skills: skillsRedusers,
    ContactUsMessages: ContactUsMessagesRedusers,
    comments: CommentsRedusers,
    certificate: CertificateRedusers,
    portfolio: PortfolioRedusers,
    uploads: UploadsReducers,
  },
});
