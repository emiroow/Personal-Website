import React, { useEffect, useContext } from 'react'
import DashboardMenu from "../Components/DashboardComponents/DashboardMenu"
import Footer from "../Components/Footer"
import DashboardHeader from '../Components/DashboardComponents/DashboardHeader';
import DashboardMainContentBody from '../Components/DashboardComponents/DashboardMainContentBody';
import { AllContext } from "../ContextApi/AllContext"
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const { authorizing } = useContext(AllContext)
  const Navgate = useNavigate()
  
  useEffect(() => {
    if (!authorizing) {
      Navgate(`/Login`)
    }
  }, [authorizing])

  return (
    <div className='flex w-full justify-between'>
      <DashboardMenu />
      <div className='w-full lg:w-[94.5%]'>
        <DashboardHeader />
        <DashboardMainContentBody />
        <Footer />
      </div>
    </div>
  )
}
