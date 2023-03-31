import React, { useEffect, useState } from 'react'
import DashboardMenu from "../Components/DashboardComponents/DashboardMenu"
import Footer from "../Components/Footer"
import DashboardHeader from '../Components/DashboardComponents/DashboardHeader';
import DashboardMainContentBody from '../Components/DashboardComponents/DashboardMainContentBody';
import { useNavigate } from 'react-router-dom';
import { DashboardContext } from '.././ContextApi/DashboardContext'
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const Navgate = useNavigate()
  const store = useSelector((store) => store.authentication)
  const [TabsInfo, SetTabsInfo] = useState([
    { Title: "FA", Icon: "ir", index: 1, CommponentName: "ContentFa" },
    { Title: "EN", Icon: "en", index: 0, CommponentName: "ContentEn" },
  ])
  const [TabState, SetTabState] = useState(1)

  useEffect(() => {
    if (!store.isToken) {
      Navgate(`/Login`)
    }
  }, [store])

  return (
    <>
      <DashboardContext.Provider value={{ TabsInfo, SetTabsInfo, SetTabState, TabState }}>
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
