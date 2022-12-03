import SideMenu from "./Components/SideMenu"
import React, { useEffect, useState } from 'react'
import SidePortfolio from "./Components/SidePortfolio"
import Main from "./Components/Main"
import i18n from './i18n';
import i18next from 'i18next'
import { PreloaderContext } from './ContextApi/loaderContext'
import { useTranslation } from "react-i18next";
import Preloader from "./Components/Preloader";
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
  const currentLanguageCode = i18n.language || 'fa'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'rlt'
    document.title = t("TabTitleOfApp")
  }, [t, currentLanguage])

  return (
    <>
      {Loading ? <Preloader /> : null}
      <PreloaderContext.Provider value={{ Loading, SetLoading }}>
        <div className=" w-[98%] mt-[15px] justify-between m-auto flex  relative text-white">
          <SidePortfolio />
          <Main />
          <SideMenu />
        </div>
      </PreloaderContext.Provider>
    </>
  );
}

export default App; 
