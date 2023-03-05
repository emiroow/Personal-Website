import React from 'react'
import Header from './SidePortfoiliComponents/Header'
import Info from './SidePortfoiliComponents/Info'
import CircleProgressBarss from "../Components/SidePortfoiliComponents/CircleProgressBarss"
import SkilsLineProgress from "../Components/SidePortfoiliComponents/SkilsLineProgress"
import AdditionalSkills from './SidePortfoiliComponents/AdditionalSkills'
import DownloadCv from './SidePortfoiliComponents/DownloadCv'
import Socials from './SidePortfoiliComponents/Socials'
export default function SidePortfolio() {
  return (
    <div className="lg:w-[25%] lg:block hidden relative h-[96vh] ">
      <div className="w-[24.4%] h-[97vh] fixed  dark:bg-BackColor bg-LightMaincolor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-md border-b-2 dark:border-DarkPurple border-LightYellow">
        <Header />
        <div className=' h-[56vh] pb-5 overflow-auto RemoveScroll cursor-pointer' >
          <Info />
          <CircleProgressBarss />
          <SkilsLineProgress />
          <AdditionalSkills />
          <DownloadCv />
        </div>
        <div className='w-full text-2xl h-[5vh] dark:text-DarkPurple text-LightYellow flex items-center dark:bg-BackColor bg-LightMaincolor shadow-[-1px_-12px_10px_-9px_rgba(0,0,0,0.25)] justify-evenly '>
          <Socials />
        </div>
      </div>
    </div>
  )
}
