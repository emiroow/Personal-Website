import React from 'react'
import Header from '../SidePortfoiliComponents/Header'
import Info from '../SidePortfoiliComponents/Info'
import CircleProgressBarss from '../SidePortfoiliComponents/CircleProgressBarss'
import SkilsLineProgress from '../SidePortfoiliComponents/SkilsLineProgress'
import AdditionalSkills from '../SidePortfoiliComponents/AdditionalSkills'
import DownloadCv from '../SidePortfoiliComponents/DownloadCv'
import Socials from "../../Components/SidePortfoiliComponents/Socials"
import { ImCancelCircle } from "react-icons/im"
import { useSelector } from 'react-redux'
export default function MobileSidePortfolio({ sidestatus, sidesetstatue }) {
    const getData = useSelector((store) => store.client.clientState)
    const getSetting = useSelector((store) => store.setting.setting)
    return (
        <div className={sidestatus ? 'fixed bg-BackColor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] w-[100%] h-full z-20 top-0 right-0 duration-700' : 'fixed bg-BackColor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] w-[100%] h-full z-20 top-0 -right-[101%] duration-700'}>
            <div className="w-full h-[100vh] fixed dark:bg-BackColor bg-LightMaincolor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-md border-b-2 dark:border-DarkPurple border-LightYellow">
                <Header />
                <div className='w-full lg:hidden text-2xl dark:text-DarkPurple text-LightYellow flex items-center dark:bg-BackColor border-b-2 dark:border-DarkPurple border-LightYellow bg-LightMaincolor shadow-[-1px_-12px_10px_-9px_rgba(0,0,0,0.25)] justify-evenly h-[6vh]'>
                    {
                        getSetting?.social && getData?.socials !== 0 ? <Socials /> : null
                    }
                </div>
                <div className=' text-sm md:text-[15px] h-[58vh] md:h-[56vh] pb-5 overflow-auto RemoveScroll cursor-pointer' >
                    <Info />
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
                <div className='w-full max-lg:hidden text-2xl dark:text-DarkPurple text-LightYellow flex items-center dark:bg-BackColor bg-LightMaincolor shadow-[-1px_-12px_10px_-9px_rgba(0,0,0,0.25)] justify-evenly h-[6vh]'>
                    {
                        getSetting?.social && getData?.socials !== 0 ? <Socials /> : null
                    }
                </div>
            </div>
            {/* closer */}
            <span onClick={e => sidesetstatue(false)} className='absolute top-2 left-2 text-[20px] dark:text-DarkPurple text-LightYellow'><ImCancelCircle /></span>
        </div>
    )
}
