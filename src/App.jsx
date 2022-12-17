import SideMenu from "./Components/SideMenu"
import React, { useEffect, useState } from 'react'
import SidePortfolio from "./Components/SidePortfolio"
import Main from "./Components/Main"
import i18n from './i18n';
import { PreloaderContext } from './ContextApi/loaderContext'
import { useTranslation } from "react-i18next";
import Preloader from "./Components/Preloader";
import MobileDviceMenu from "./Components/MobileDviceMenu";
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
    <div className="dark:bg-MainColorDark duration-100 bg-LightBackcolor">
      {Loading ? <Preloader /> : null}
      <PreloaderContext.Provider value={{ Loading, SetLoading }}>
        <div className=" w-[98%] mt-[15px] max-md:flex-col justify-between m-auto flex  relative text-white ">
          <MobileDviceMenu />
          <SidePortfolio />
          <Main />
          <SideMenu />
        </div>
      </PreloaderContext.Provider>
    </div>
  );
}

export default App; 
