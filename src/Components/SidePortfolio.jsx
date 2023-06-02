import React from 'react'
import Header from './SidePortfoiliComponents/Header'
import Info from './SidePortfoiliComponents/Info'
import CircleProgressBarss from "../Components/SidePortfoiliComponents/CircleProgressBarss"
import SkilsLineProgress from "../Components/SidePortfoiliComponents/SkilsLineProgress"
import AdditionalSkills from './SidePortfoiliComponents/AdditionalSkills'
import DownloadCv from './SidePortfoiliComponents/DownloadCv'
import Socials from './SidePortfoiliComponents/Socials'
import { useSelector } from 'react-redux'
export default function SidePortfolio() {
  const getData = useSelector((store) => store.client.clientState)
  const getSetting = useSelector((store) => store.setting.setting)
  return (
    <div className="lg:w-[25%] lg:block hidden relative h-[96vh] ">
      <div className="w-[24.4%] h-[97vh] fixed  dark:bg-BackColor bg-LightMaincolor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-md border-b-2 dark:border-DarkPurple border-LightYellow">
        <Header />
        <div className='w-full lg:hidden text-2xl h-[5vh] dark:text-DarkPurple border-b-2 dark:border-DarkPurple border-LightYellow text-LightYellow flex items-center dark:bg-BackColor bg-LightMaincolor shadow-[-1px_-12px_10px_-9px_rgba(0,0,0,0.25)] justify-evenly '>
          {
            getSetting?.social && getData?.socials !== 0 ? <Socials /> : null
          }
        </div>
        <div className={`${getSetting?.social && getData?.socials ? "h-[56vh]" : "h-[62vh]"} pb-5 overflow-auto RemoveScroll cursor-pointer`} >
          {
            getSetting?.info ? <Info /> : null
          }
          {
            getSetting?.circleSkills && getData?.circleSkills !== 0 ? <CircleProgressBarss /> : null
          }
          {
            getSetting?.skills && getData?.skills !== 0 ? <SkilsLineProgress /> : null
          }
          {
            getSetting?.otherSkills && getData?.skills?.filter((item) => item.progressBar === false).length !== 0 ? <AdditionalSkills /> : null
          }
          {
            getSetting?.downloadCv && getData?.about?.cvUrl ? <DownloadCv /> : null
          }
        </div>
        {
          getSetting?.social && getData?.socials !== 0 ? <Socials /> : null
        }
      </div>
    </div>
  )
}
