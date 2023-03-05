import React, { useEffect, useContext, useState } from 'react'
import DashboardMenu from "../Components/DashboardComponents/DashboardMenu"
import Footer from "../Components/Footer"
import DashboardHeader from '../Components/DashboardComponents/DashboardHeader';
import DashboardMainContentBody from '../Components/DashboardComponents/DashboardMainContentBody';
import { AllContext } from "../ContextApi/AllContext"
import { useNavigate } from 'react-router-dom';
import Preloader from "../Components/Preloader"
import { useTranslation } from 'react-i18next';
import { DashboardContext } from '.././ContextApi/DashboardContext'

export default function Dashboard() {
  const { authorizing, DashboardLoader } = useContext(AllContext)
  const Navgate = useNavigate()

  const [TabsInfo, SetTabsInfo] = useState([
    { Title: "FA", Icon: "ir", index: 1, CommponentName: "ContentFa" },
    { Title: "EN", Icon: "en", index: 0, CommponentName: "ContentEn" },
  ])

  useEffect(() => {
    if (!authorizing) {
      Navgate(`/Login`)
    }
  }, [authorizing])

  return (
    <>
      <DashboardContext.Provider value={{ TabsInfo, SetTabsInfo }}>
        {DashboardLoader ? <Preloader /> : null}
        <div className='flex w-full justify-between'>
          <DashboardMenu />
          <div className='w-full lg:w-[94.5%]'>
            <DashboardHeader />
            <DashboardMainContentBody />
            <Footer />
          </div>
        </div>
      </DashboardContext.Provider>
    </>
  )
}
