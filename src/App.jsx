import React, { useEffect, useState } from 'react'
import i18n from './i18n';
import { PreloaderContext } from './ContextApi/loaderContext'
import { useTranslation } from "react-i18next";
import Preloader from "./Components/Preloader";
import { Route, Routes } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Client from './Pages/Client';
import Login from "./Components/DashboardComponents/Login"
const languages = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'fa',
    name: 'فارسی',
    dir: 'rtl',
  },
]

function App() {
  const [Loading, SetLoading] = useState(false)
  const [authorizing, Setauthorizing] = useState(false)
  const currentLanguageCode = i18n.language || 'fa'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'rlt'
    document.title = t("TabTitleOfApp")
  }, [t, currentLanguage])

  return (
    <>
      <PreloaderContext.Provider value={{ Loading, SetLoading, Setauthorizing, authorizing }}>
        <div className="dark:bg-MainColorDark duration-100 bg-LightBackcolor">
          {Loading ? <Preloader /> : null}
          <div className=" w-[98%] mt-[15px] max-md:flex-col justify-between m-auto flex  relative text-white ">
            <Routes>
              <Route path="/" element={<Client />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Admin/*" element={<Dashboard />} >
                {/* <Route index element={} /> */}
              </Route>
            </Routes>
          </div>
        </div>
      </PreloaderContext.Provider>
    </>
  );
}

export default App; 
