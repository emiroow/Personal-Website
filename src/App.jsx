import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/DashboardComponents/About/About";
import Analyze from "./Components/DashboardComponents/Analysis/Analysis";
import Certificate from "./Components/DashboardComponents/Certificate/Certificates";
import Comments from "./Components/DashboardComponents/Comments/Comments";
import ContactUsMessages from "./Components/DashboardComponents/ContactUsMessages/ContactUsMessages";
import DashboardIndex from "./Components/DashboardComponents/DashboardIndex/DashboardIndex";
import Educations from "./Components/DashboardComponents/Educations/Educations";
import Histories from "./Components/DashboardComponents/Histories/Histories";
import Portfolios from "./Components/DashboardComponents/Portfolio/Portfolios";
import Services from "./Components/DashboardComponents/Services/Services";
import Skills from "./Components/DashboardComponents/Skills/Skills";
import Socials from "./Components/DashboardComponents/Socials/Socials";
import Uploads from "./Components/DashboardComponents/Uploads/Uploads";
import BadRequest from "./Pages/BadRequest";
import Client from "./Pages/Client";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import { fetchClientData } from "./Reducers/clientSlice";
import { fetchGetSetting } from "./Reducers/settingSlice";
import i18n from "./i18n";
const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
  },
  {
    code: "fa",
    name: "فارسی",
    dir: "rtl",
  },
];

function App() {
  const currentLanguageCode = i18n.language || "fa";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "rlt";
    document.title = t("TabTitleOfApp");
    dispatch(fetchClientData(i18n.language));
    dispatch(fetchGetSetting());
  }, [t, currentLanguage]);

  return (
    <>
      <div className="dark:bg-MainColorDark duration-100 bg-LightBackcolor">
        <div className=" w-[98%] mt-[15px] max-md:flex-col justify-between m-auto flex  relative text-white ">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Client />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Admin/*" element={<Dashboard />}>
              <Route index element={<DashboardIndex />} />
              <Route path="About" element={<About />} />
              <Route path="Analyze" element={<Analyze />} />
              <Route path="Certificate" element={<Certificate />} />
              <Route path="Comments" element={<Comments />} />
              <Route path="ContactUsMessages" element={<ContactUsMessages />} />
              <Route path="Educations" element={<Educations />} />
              <Route path="Histories" element={<Histories />} />
              <Route path="Services" element={<Services />} />
              <Route path="Skills" element={<Skills />} />
              <Route path="Socials" element={<Socials />} />
              <Route path="Portfolios" element={<Portfolios />} />
              <Route path="Uploads" element={<Uploads />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="500" element={<BadRequest />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
