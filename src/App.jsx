import React, { useEffect, useState } from 'react'
import i18n from './i18n';
import { AllContext } from './ContextApi/AllContext'
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Client from './Pages/Client';
import Login from "./Pages/Login"
import { GetPerspnalData } from './Service/PersonalServices';
import NotFound from "./Pages/NotFound"
import BadRequest from './Pages/BadRequest';

const languages = [
  {
    code: 'en',
    name: 'English',
    dir: 'ltr',
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
  const currentLanguageCode = i18n.language || "fa"
  const [GetPersonal, SetPersonal] = useState()
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    let Token = localStorage.getItem("TK")
    if (Token) {
      Setauthorizing(true)
    } else {
      Setauthorizing(false)
    }
  }, [])

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'rlt'
    document.title = t("TabTitleOfApp")
    const GetFromServer = async () => {
      try {
        SetLoading(true)
        const { data } = await GetPerspnalData(i18n.language)
        SetPersonal(data)
        SetLoading(false)
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
        }
      }
    }
    GetFromServer()
  }, [t, currentLanguage])

  return (
    <>
      <AllContext.Provider value={{ Loading, SetLoading, Setauthorizing, authorizing, GetPersonal, SetPersonal }}>
        <div className="dark:bg-MainColorDark duration-100 bg-LightBackcolor">
          <div className=" w-[98%] mt-[15px] max-md:flex-col justify-between m-auto flex  relative text-white ">
            <Routes>
              <Route path="/" element={<Client />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Admin/*" element={<Dashboard />} >
                {/* <Route index element={} /> */}
              </Route>
              <Route path="*" element={<NotFound />} />
              <Route path="500" element={<BadRequest />} />
            </Routes>
          </div>
        </div>
      </AllContext.Provider>
    </>
  );
}

export default App; 