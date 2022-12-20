import React from 'react'
import DashboardMenu from "../Components/DashboardComponents/DashboardMenu"
import Footer from "../Components/Footer"
import DashboardHeader from '../Components/DashboardComponents/DashboardHeader';
import DashboardMainContentBody from '../Components/DashboardComponents/DashboardMainContentBody';
export default function Dashboard() {
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
